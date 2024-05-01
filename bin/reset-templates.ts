import { readFile, writeFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const TEMPLATE_DIR = resolve(__dirname, "../src/templates");
const TUTORIAL_DIR = resolve(__dirname, "../src/tutorial");

// Read all *.template.ts files in the templates directory
async function readTemplates() {
  const templateDirFiles = await readdir(TEMPLATE_DIR);
  const templates = templateDirFiles
    .filter((file) => file.endsWith(".template.ts"))
    .map(async (file) => {
      const content = await readFile(resolve(TEMPLATE_DIR, file), "utf-8");
      return { file, content };
    });
  return templates;
}

async function main() {
  const templates = await readTemplates();

  for (const template of templates) {
    const { file, content } = await template;
    const newFile = file.replace(".template", "");
    await writeFile(`${TUTORIAL_DIR}/${newFile}`, content);
  }
}

main();
