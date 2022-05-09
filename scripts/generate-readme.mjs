import path from "path";
import fs from "fs";

const dirname = path.dirname(new URL(import.meta.url).pathname);
const ROOT_DIR = path.resolve(dirname, "../src");

function getDirectories(srcpath) {
  return fs
    .readdirSync(srcpath)
    .filter((file) => fs.statSync(path.join(srcpath, file)).isDirectory());
}

function getFiles(srcpath) {
  return fs
    .readdirSync(srcpath)
    .filter((file) => !fs.statSync(path.join(srcpath, file)).isDirectory());
}

const directories = getDirectories(ROOT_DIR);

for (const directory of directories) {
  const innerDirectories = getDirectories(path.resolve(ROOT_DIR, directory));

  for (const innerDirectory of innerDirectories) {
    const inner = path.resolve(ROOT_DIR, directory, innerDirectory);
    const readmePath = `${inner}/README.md`;

    const testFileDir = path.resolve(ROOT_DIR, inner, "__tests__");
    const files = getFiles(testFileDir);

    let content = "";

    for (const file of files) {
      const filePath = path.resolve(testFileDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const fileName = file.replace(".test.ts", "");

      content += `\n## ${fileName}\n\n\`\`\`ts\n${fileContent}\n\`\`\``;
    }

    fs.writeFileSync(
      readmePath,
      `# ${directory}/${innerDirectory}
${content}
      `
    );
  }
}
