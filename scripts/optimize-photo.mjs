// One-off image optimization script. NOT wired into the build.
// Run manually with: node scripts/optimize-photo.mjs
//
// Reads the professional headshot source JPEG and outputs resized
// WebP (and AVIF, when supported) variants into public/images/ for use
// as the hero section's responsive srcSet.

import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const SOURCE = path.join(
	rootDir,
	"src/assets/images/guilherme-profissional.jpeg",
);
const OUTPUT_DIR = path.join(rootDir, "public/images");
const BASE_NAME = "guilherme-reis-2026";
const WIDTHS = [480, 960, 1440];

async function ensureOutputDir() {
	if (!existsSync(OUTPUT_DIR)) {
		await mkdir(OUTPUT_DIR, { recursive: true });
	}
}

async function generateWebp(width) {
	const outPath = path.join(OUTPUT_DIR, `${BASE_NAME}-${width}.webp`);
	await sharp(SOURCE)
		.resize({ width, withoutEnlargement: true })
		.webp({ quality: 82 })
		.toFile(outPath);
	console.log(`Generated ${path.relative(rootDir, outPath)}`);
}

async function generateAvif(width) {
	const outPath = path.join(OUTPUT_DIR, `${BASE_NAME}-${width}.avif`);
	try {
		await sharp(SOURCE)
			.resize({ width, withoutEnlargement: true })
			.avif({ quality: 60 })
			.toFile(outPath);
		console.log(`Generated ${path.relative(rootDir, outPath)}`);
	} catch (error) {
		console.warn(
			`Skipping AVIF for width ${width} (encoder unavailable): ${error.message}`,
		);
	}
}

async function main() {
	if (!existsSync(SOURCE)) {
		console.error(`Source image not found at ${SOURCE}`);
		process.exit(1);
	}

	await ensureOutputDir();

	for (const width of WIDTHS) {
		await generateWebp(width);
		await generateAvif(width);
	}

	console.log("Done.");
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
