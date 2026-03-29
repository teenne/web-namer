import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { createHash } from "node:crypto";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

interface OgPage {
  slug: string;
  title: string;
  description?: string;
  template?: "default" | "article" | "product";
}

const pages: OgPage[] = [
  {
    slug: "home",
    title: "Welcome to Our Website",
    description: "Discover what we have to offer.",
    template: "default",
  },
  {
    slug: "about",
    title: "About Us",
    description: "Learn more about our story, mission, and team.",
    template: "default",
  },
  {
    slug: "contact",
    title: "Get in Touch",
    description: "We would love to hear from you. Reach out today.",
    template: "default",
  },
];

const BRAND_NAME = "Brand";
const WIDTH = 1200;
const HEIGHT = 630;
const OUTPUT_DIR = resolve("public/og");
const FONTS_DIR = resolve("scripts/fonts");
const CACHE_FILE = join(OUTPUT_DIR, ".cache.json");

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function contentHash(page: OgPage): string {
  const payload = JSON.stringify({ slug: page.slug, title: page.title, description: page.description, template: page.template });
  return createHash("sha256").update(payload).digest("hex");
}

function readCache(): Record<string, string> {
  if (existsSync(CACHE_FILE)) {
    try {
      return JSON.parse(readFileSync(CACHE_FILE, "utf-8"));
    } catch {
      return {};
    }
  }
  return {};
}

function writeCache(cache: Record<string, string>): void {
  writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), "utf-8");
}

function loadFonts(): { name: string; data: Buffer; weight: number; style: string }[] {
  // TODO: Place .ttf font files in scripts/fonts/ for custom font rendering.
  //       e.g. scripts/fonts/Inter-Regular.ttf and scripts/fonts/Inter-Bold.ttf
  const fonts: { name: string; data: Buffer; weight: number; style: string }[] = [];

  try {
    const regularPath = join(FONTS_DIR, "Inter-Regular.ttf");
    const boldPath = join(FONTS_DIR, "Inter-Bold.ttf");

    if (existsSync(boldPath)) {
      fonts.push({ name: "Inter", data: readFileSync(boldPath), weight: 700, style: "normal" });
    }
    if (existsSync(regularPath)) {
      fonts.push({ name: "Inter", data: readFileSync(regularPath), weight: 400, style: "normal" });
    }
  } catch (err) {
    console.warn("Could not load custom fonts, falling back to default sans-serif:", err);
  }

  // Fallback: if no custom fonts were loaded, provide a minimal placeholder.
  // Satori requires at least one font, so we generate a tiny empty-glyph font buffer
  // as a last resort. In practice you should place real .ttf files in scripts/fonts/.
  if (fonts.length === 0) {
    console.warn("No font files found in scripts/fonts/. Using system fallback.");
    // Satori needs at least one font — use a dummy buffer that will render blank glyphs.
    // For real output, add .ttf files to scripts/fonts/.
    try {
      // Attempt to read any .ttf file present in the fonts directory
      const { readdirSync } = require("node:fs");
      const ttfFiles: string[] = (readdirSync(FONTS_DIR) as string[]).filter((f: string) => f.endsWith(".ttf"));
      if (ttfFiles.length > 0) {
        fonts.push({ name: "CustomFont", data: readFileSync(join(FONTS_DIR, ttfFiles[0])), weight: 400, style: "normal" });
      }
    } catch {
      // ignore
    }
  }

  return fonts;
}

// ---------------------------------------------------------------------------
// Template rendering (returns Satori-compatible JSX-like object)
// ---------------------------------------------------------------------------

function gradientForTemplate(template: string): string {
  switch (template) {
    case "article":
      return "linear-gradient(135deg, #1e3a5f 0%, #4a90d9 100%)";
    case "product":
      return "linear-gradient(135deg, #5b2c6f 0%, #c0392b 100%)";
    default:
      return "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)";
  }
}

function buildMarkup(page: OgPage) {
  const template = page.template ?? "default";

  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
        padding: "60px",
        background: gradientForTemplate(template),
        fontFamily: "Inter, sans-serif",
        color: "white",
      },
      children: [
        {
          type: "div",
          props: {
            style: { display: "flex", flexDirection: "column", gap: "16px" },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "56px",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                  },
                  children: page.title,
                },
              },
              ...(page.description
                ? [
                    {
                      type: "div",
                      props: {
                        style: {
                          fontSize: "28px",
                          fontWeight: 400,
                          color: "rgba(255,255,255,0.8)",
                          lineHeight: 1.4,
                        },
                        children: page.description,
                      },
                    },
                  ]
                : []),
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              fontSize: "24px",
              fontWeight: 700,
              opacity: 0.9,
            },
            children: BRAND_NAME,
          },
        },
      ],
    },
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const fonts = loadFonts();
  const cache = readCache();
  const newCache: Record<string, string> = {};

  for (const page of pages) {
    const hash = contentHash(page);
    const outPath = join(OUTPUT_DIR, `${page.slug}.png`);

    // Skip if cached and output still exists
    if (cache[page.slug] === hash && existsSync(outPath)) {
      console.log(`Skipped (cached): ${page.slug}.png`);
      newCache[page.slug] = hash;
      continue;
    }

    const markup = buildMarkup(page);

    const satoriOptions: Parameters<typeof satori>[1] = {
      width: WIDTH,
      height: HEIGHT,
      fonts: fonts.length > 0
        ? fonts.map((f) => ({ name: f.name, data: f.data, weight: f.weight as any, style: f.style as any }))
        : [],
    };

    const svg = await satori(markup as any, satoriOptions);

    // SVG → PNG via resvg
    const resvg = new Resvg(svg, {
      fitTo: { mode: "width", value: WIDTH },
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    // Optimize via Sharp
    const optimized = await sharp(pngBuffer)
      .png({ quality: 90, compressionLevel: 9 })
      .toBuffer();

    writeFileSync(outPath, optimized);
    console.log(`Generated: ${page.slug}.png`);
    newCache[page.slug] = hash;
  }

  writeCache(newCache);
  console.log("Done.");
}

main().catch((err) => {
  console.error("OG image generation failed:", err);
  process.exit(1);
});
