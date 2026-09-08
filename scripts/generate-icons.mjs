#!/usr/bin/env node
// Generates PWA / app icons into public/icons from the site logo.
//
// Usage:   npm run icons
// Then commit the regenerated public/icons/*.png files.
//
// Outputs:
//   public/icons/icon-192.png          Android install icon (any)
//   public/icons/icon-512.png          Android install / splash (any)
//   public/icons/maskable-512.png      Android adaptive icon (safe-zone padded)
//   public/icons/apple-touch-icon.png  iOS home screen (180x180, opaque)
import { mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = join(root, "public", "icons");
mkdirSync(OUT_DIR, { recursive: true });

// Brand background matches the site's dark page background (index.astro theme-color).
const BG = "#07080b";
// The logo glyph, drawn white on the dark background. Paths are the favicon
// polygons mapped into a 0..50 coordinate space.
const LOGO_POLYGONS = [
  "0 30.1184211 0 22.9226974 16 14 16 21.5657895 6.00369686 26.3766447 6.00369686 26.6644737 16 31.4753289 16 39",
  "31 7 23.9756098 43 19 43 26.0243902 7",
  "50 30.1184211 34 39 34 31.4753289 44.025878 26.6644737 44.025878 26.3766447 34 21.5657895 34 14 50 22.9226974",
];

// Builds an SVG of the given size. `logoRatio` is the fraction of the canvas
// the 50x50 logo occupies (the rest is padding — larger padding = bigger safe
// zone for maskable icons, which are cropped to a circle on some launchers).
function iconSvg(size, logoRatio) {
  const logo = size * logoRatio;
  const offset = (size - logo) / 2;
  const scale = logo / 50;
  const polys = LOGO_POLYGONS.map(
    (points) => `<polygon points="${points}" fill="#ffffff" fill-rule="nonzero" />`,
  ).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="${BG}" />
  <g transform="translate(${offset} ${offset}) scale(${scale})">${polys}</g>
</svg>`;
}

async function render(size, logoRatio, filename) {
  const out = join(OUT_DIR, filename);
  await sharp(Buffer.from(iconSvg(size, logoRatio)))
    .flatten({ background: BG }) // opaque background (iOS home-screen icons must have no alpha)
    .png()
    .toFile(out);
  console.log(`  wrote ${filename} (${size}x${size})`);
}

console.log("Generating app icons ->", OUT_DIR);
// "any" icons use ~68% of the canvas; maskable uses ~52% for the safe zone.
await render(192, 0.68, "icon-192.png");
await render(512, 0.68, "icon-512.png");
await render(512, 0.52, "maskable-512.png");
await render(180, 0.66, "apple-touch-icon.png");
console.log("Done.");
