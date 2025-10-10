import fs from "fs";
import path from "path";

export function getImagesFromFolder(folder: string): string[] {
  const folderPath = path.join(process.cwd(), "public", folder);

  if (!fs.existsSync(folderPath)) return [];

  return fs
    .readdirSync(folderPath)
    .filter((file) => /\.(jpe?g|png|webp|gif|svg)$/i.test(file))
    .sort((a, b) => {
      // Extract numbers from filenames for numeric sort
      const numA = parseInt(a.match(/\d+/)?.[0] || "0", 10);
      const numB = parseInt(b.match(/\d+/)?.[0] || "0", 10);
      return numA - numB;
    })
    .map((file) => `/${folder}/${file}`);
}
