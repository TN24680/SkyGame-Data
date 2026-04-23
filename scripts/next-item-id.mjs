import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "jsonc-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const itemsDir = path.resolve(__dirname, "../src/assets/items");

async function getJsoncFiles(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = [];

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			files.push(...(await getJsoncFiles(fullPath)));
			continue;
		}

		if (entry.isFile() && entry.name.endsWith(".jsonc")) {
			files.push(fullPath);
		}
	}

	return files;
}

function findMaxId(value, currentMax = -Infinity) {
	if (Array.isArray(value)) {
		let max = currentMax;
		for (const item of value) {
			max = findMaxId(item, max);
		}
		return max;
	}

	if (value && typeof value === "object") {
		let max = currentMax;

		if (typeof value.id === "number" && Number.isFinite(value.id)) {
			max = Math.max(max, value.id);
		}

		for (const nestedValue of Object.values(value)) {
			max = findMaxId(nestedValue, max);
		}

		return max;
	}

	return currentMax;
}

async function main() {
	const files = await getJsoncFiles(itemsDir);
	let maxId = -Infinity;

	for (const filePath of files) {
		const content = await readFile(filePath, "utf8");
		const data = parse(content);
		maxId = findMaxId(data, maxId);
	}

	if (!Number.isFinite(maxId)) {
		throw new Error(`No numeric id properties found in ${itemsDir}`);
	}

	console.log(maxId + 1);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
