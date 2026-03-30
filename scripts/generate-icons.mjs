/**
 * PWA Icon Generator
 * Generates all required icon sizes from public/favicon.svg
 * Run: node scripts/generate-icons.mjs
 */

import sharp from "sharp";
import { existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SRC_SVG = resolve(ROOT, "public/favicon.svg");
const OUT_DIR = resolve(ROOT, "public/icons");

// Icon sizes required for PWA + Play Store TWA
const SIZES = [72, 96, 128, 144, 152, 192, 384, 512];

// Maskable icon padding: 10% safe-zone on each side
const MASKABLE_PADDING = 0.1;

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

async function generateIcon(size, suffix = "") {
  const outFile = resolve(OUT_DIR, `icon-${size}x${size}${suffix}.png`);
  await sharp(SRC_SVG)
    .resize(size, size, {
      fit: "contain",
      background: { r: 108, g: 99, b: 255, alpha: 1 },
    })
    .png()
    .toFile(outFile);
  console.log(`✓ ${outFile}`);
}

async function generateMaskableIcon(size) {
  const padding = Math.round(size * MASKABLE_PADDING);
  const innerSize = size - padding * 2;
  const outFile = resolve(OUT_DIR, `icon-${size}x${size}-maskable.png`);

  // Create inner icon
  const inner = await sharp(SRC_SVG)
    .resize(innerSize, innerSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  // Composite onto solid background with brand color
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 108, g: 99, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: inner, top: padding, left: padding }])
    .png()
    .toFile(outFile);

  console.log(`✓ ${outFile}`);
}

// Also generate root favicon PNG for broader compatibility
async function generateFavicon() {
  const outFile = resolve(ROOT, "public/icon-192x192.png");
  await sharp(SRC_SVG)
    .resize(192, 192, {
      fit: "contain",
      background: { r: 108, g: 99, b: 255, alpha: 1 },
    })
    .png()
    .toFile(outFile);
  console.log(`✓ ${outFile}`);

  const favicon = resolve(ROOT, "public/apple-touch-icon.png");
  await sharp(SRC_SVG)
    .resize(180, 180, {
      fit: "contain",
      background: { r: 108, g: 99, b: 255, alpha: 1 },
    })
    .png()
    .toFile(favicon);
  console.log(`✓ ${favicon}`);
}

async function main() {
  console.log("Generating PWA icons...\n");

  for (const size of SIZES) {
    await generateIcon(size);
    await generateMaskableIcon(size);
  }

  await generateFavicon();

  console.log("\nAll icons generated successfully!");
  console.log(`Output: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error("Icon generation failed:", err);
  process.exit(1);
});
