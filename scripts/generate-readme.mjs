import path from "path";
import fs from "fs";

const dirname = path.dirname(new URL(import.meta.url).pathname);
const ROOT_DIR = path.resolve(dirname, "../src");
const GITHUB_SRC_PATH = "https://github.com/konojunya/clafn/blob/main/src";

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
let links = "";

for (const directory of directories) {
  const innerDirectories = getDirectories(path.resolve(ROOT_DIR, directory));

  for (const innerDirectory of innerDirectories) {
    const inner = path.resolve(ROOT_DIR, directory, innerDirectory);
    const readmePath = `${inner}/README.md`;

    const testFileDir = path.resolve(ROOT_DIR, inner, "__tests__");
    const files = getFiles(testFileDir);

    links += `\n## [${directory}/${innerDirectory}](${GITHUB_SRC_PATH}/${directory}/${innerDirectory}/README.md)\n`;
    let content = "";

    for (const file of files) {
      const filePath = path.resolve(testFileDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const fileName = file.replace(".test.ts", "");

      links += `- [${fileName}](${GITHUB_SRC_PATH}/${directory}/${innerDirectory}/__tests__/${file})\n`;
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

fs.writeFileSync(
  path.resolve(dirname, "../README.md"),
  "# clafn(cræf)\n\nclafn is JavaScript Utilities Class and Functions\n" + links
);
