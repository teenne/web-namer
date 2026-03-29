import sharp from "sharp";
import { readdirSync, statSync, existsSync, mkdirSync } from "node:fs";
import { join, resolve, extname, basename, parse as parsePath } from "node:path";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".tiff"]);
const WIDTHS = [640, 960, 1280, 1920];
const DEFAULT_QUALITY = 82;
const REDUCED_QUALITY = 70;
const SIZE_BUDGET_BYTES = 200 * 1024; // 200 KB

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const inputDir = resolve(args[0] ?? "scripts/staging");
const outputDir = resolve(args[1] ?? "public/images/heroes");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function isSupported(filename: string): boolean {
  return SUPPORTED_EXTENSIONS.has(extname(filename).toLowerCase());
}

function isNewer(srcPath: string, destPath: string): boolean {
  if (!existsSync(destPath)) return false;
  const srcStat = statSync(srcPath);
  const destStat = statSync(destPath);
  return destStat.mtimeMs >= srcStat.mtimeMs;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  if (!existsSync(inputDir)) {
    console.error(`Input directory does not exist: ${inputDir}`);
    process.exit(1);
  }

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
    console.log(`Created output directory: ${outputDir}`);
  }

  const files = readdirSync(inputDir).filter(isSupported);

  if (files.length === 0) {
    console.log("No supported images found in input directory.");
    return;
  }

  for (const file of files) {
    const srcPath = join(inputDir, file);
    const { name } = parsePath(file);

    // Determine how many variants we will actually generate
    const variantsToGenerate: number[] = [];
    for (const width of WIDTHS) {
      const destPath = join(outputDir, `${name}-${width}w.webp`);
      if (isNewer(srcPath, destPath)) {
        continue; // output exists and is newer — skip
      }
      variantsToGenerate.push(width);
    }

    if (variantsToGenerate.length === 0) {
      console.log(`Skipped (up to date): ${file}`);
      continue;
    }

    console.log(`Optimizing: ${file} → ${variantsToGenerate.length} variants`);

    for (const width of variantsToGenerate) {
      const destPath = join(outputDir, `${name}-${width}w.webp`);

      // First pass at default quality
      let buffer = await sharp(srcPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: DEFAULT_QUALITY })
        .toBuffer();

      // If over budget, re-encode at reduced quality
      if (buffer.length > SIZE_BUDGET_BYTES) {
        buffer = await sharp(srcPath)
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: REDUCED_QUALITY })
          .toBuffer();
      }

      await sharp(buffer).toFile(destPath);
    }
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error("Image optimization failed:", err);
  process.exit(1);
});
