#!/usr/bin/env python3
"""Deploy built site to Hetzner VPS via SFTP."""
import os
import sys
import subprocess
import paramiko

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
DIST_DIR = os.path.join(PROJECT_DIR, "dist")
ENV_FILE = os.path.join(PROJECT_DIR, ".env")


def load_env():
    env = {}
    with open(ENV_FILE) as f:
        for line in f:
            line = line.strip()
            if "=" in line and not line.startswith("#"):
                k, v = line.split("=", 1)
                env[k] = v
    return env


def build():
    print("Building site...")
    result = subprocess.run(["npm", "run", "build"], cwd=PROJECT_DIR, shell=True)
    if result.returncode != 0:
        print("Build failed!")
        sys.exit(1)


def upload_dir(sftp, local_dir, remote_dir, skip=None):
    """Recursively upload a directory via SFTP."""
    for item in sorted(os.listdir(local_dir)):
        if skip and item in skip:
            continue
        local_path = os.path.join(local_dir, item)
        remote_path = remote_dir + "/" + item

        if os.path.isdir(local_path):
            try:
                sftp.stat(remote_path)
            except FileNotFoundError:
                sftp.mkdir(remote_path)
            upload_dir(sftp, local_path, remote_path)
        else:
            print(f"  {item}")
            sftp.put(local_path, remote_path)


def connect_sftp(env):
    """Connect to server and return (client, sftp)."""
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    connect_kwargs = {
        "hostname": env["DEPLOY_HOST"],
        "port": int(env["DEPLOY_PORT"]),
        "username": env["DEPLOY_USER"],
    }
    key_path = env.get("DEPLOY_KEY")
    password = env.get("DEPLOY_SSH_PASSWORD")
    if key_path:
        try:
            connect_kwargs["key_filename"] = os.path.expanduser(key_path)
            client.connect(**connect_kwargs)
        except paramiko.AuthenticationException:
            if password:
                print("Key auth failed, using password...")
                connect_kwargs.pop("key_filename", None)
                connect_kwargs["password"] = password
                client.connect(**connect_kwargs)
            else:
                raise
    elif password:
        connect_kwargs["password"] = password
        client.connect(**connect_kwargs)
    else:
        raise ValueError("No DEPLOY_KEY or DEPLOY_SSH_PASSWORD in .env")
    return client, client.open_sftp()


def deploy():
    env = load_env()
    remote = env["DEPLOY_PATH"]
    site_url = env.get("PUBLIC_SITE_URL", remote)

    print(f"Deploying to {env['DEPLOY_HOST']}:{remote}...")
    client, sftp = connect_sftp(env)

    # Upload assets first to avoid cached 404s from Cloudflare
    astro_local = os.path.join(DIST_DIR, "_astro")
    astro_remote = remote + "/_astro"
    if os.path.isdir(astro_local):
        try:
            sftp.stat(astro_remote)
        except FileNotFoundError:
            sftp.mkdir(astro_remote)
        print("Uploading assets (_astro/)...")
        upload_dir(sftp, astro_local, astro_remote)

    # Then upload everything else
    print("Uploading pages...")
    upload_dir(sftp, DIST_DIR, remote, skip={"_astro"})

    sftp.close()
    client.close()

    print(f"\nDone. Site live at:")
    print(f"  {site_url}")


if __name__ == "__main__":
    os.chdir(PROJECT_DIR)
    if "--skip-build" not in sys.argv:
        build()
    deploy()
