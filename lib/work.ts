import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface WorkEntry {
  slug: string;
  title: string;
  description: string;
  content: string;
  [key: string]: any;
}

const workDirectory = path.join(process.cwd(), "content/work");

function ensureDir() {
  if (!fs.existsSync(workDirectory)) {
    fs.mkdirSync(workDirectory, { recursive: true });
  }
}

export function getAllWork(): WorkEntry[] {
  ensureDir();
  const fileNames = fs.readdirSync(workDirectory).filter((f) => f.endsWith(".mdx"));
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(workDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      content: "",
      title: data.title || "Untitled",
      description: data.description || "",
      ...data,
    } as WorkEntry;
  });
}

export function getWorkBySlug(slug: string): WorkEntry | null {
  const fullPath = path.join(workDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    content,
    title: data.title || "Untitled",
    description: data.description || "",
    ...data,
  } as WorkEntry;
}
