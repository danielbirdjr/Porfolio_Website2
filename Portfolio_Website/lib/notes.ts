import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Note } from "@/lib/notes-shared";

export type { Note, NoteFrontmatter, NoteCategory } from "@/lib/notes-shared";
export { formatDate } from "@/lib/notes-shared";

const NOTES_DIR = path.join(process.cwd(), "content", "notes");

function readNoteFile(fileName: string): Note | null {
  const fullPath = path.join(NOTES_DIR, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  // A note must opt in via `published: true`.
  if (data.published !== true) return null;

  const slug = (data.slug as string) || fileName.replace(/\.mdx?$/, "");

  return {
    meta: {
      title: data.title ?? slug,
      date: data.date ?? new Date().toISOString(),
      category: data.category ?? "Notes",
      description: data.description ?? "",
      slug,
      published: true,
    },
    content,
  };
}

/** All published notes, newest first. */
export function getAllNotes(): Note[] {
  if (!fs.existsSync(NOTES_DIR)) return [];

  return fs
    .readdirSync(NOTES_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .map(readNoteFile)
    .filter((note): note is Note => note !== null)
    .sort(
      (a, b) =>
        new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime(),
    );
}

export function getNoteBySlug(slug: string): Note | undefined {
  return getAllNotes().find((note) => note.meta.slug === slug);
}

/** Unique category names across all published notes (for the filter UI). */
export function getCategories(): string[] {
  const set = new Set(getAllNotes().map((note) => note.meta.category));
  return Array.from(set).sort();
}
