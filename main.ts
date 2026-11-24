import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function loadPostAddress(): string {
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  const postFile = join(scriptDir, "POST.json");
  const rawText = readFileSync(postFile, "utf-8");
  const parsed = JSON.parse(rawText) as { url: unknown };
  if (typeof parsed.url !== "string" || parsed.url.length === 0) {
    throw new Error("POST.json does not name a post address under url");
  }
  if (!parsed.url.startsWith("https://x.com/")) {
    throw new Error("POST.json does not name an x.com post address");
  }
  return parsed.url;
}

function main(): void {
  const address = loadPostAddress();
  console.log(address);
}

main();
