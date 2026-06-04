/**
 * Client-safe note types and helpers. No `fs` here, so this can be
 * imported from client components. Server-only file reading lives in
 * `lib/notes.ts`.
 */

export type NoteCategory = "Fitness" | "Engineering" | "Notes" | string;

export type NoteFrontmatter = {
  title: string;
  date: string;
  category: NoteCategory;
  description: string;
  slug: string;
  published: boolean;
};

export type Note = {
  meta: NoteFrontmatter;
  content: string;
};

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
