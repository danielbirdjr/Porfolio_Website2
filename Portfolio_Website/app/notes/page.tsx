import type { Metadata } from "next";
import { NotesGrid } from "@/components/notes/notes-grid";
import { getAllNotes, getCategories } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes & Guides",
  description:
    "Essays, engineering notes, and fitness coaching guides by Daniel Bird.",
};

export default function NotesPage() {
  const notes = getAllNotes();
  const categories = getCategories();

  return (
    <div className="border-t border-border">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-glow opacity-60" aria-hidden />
        <div className="container relative pt-32 pb-12 sm:pt-40 sm:pb-16">
          <div className="eyebrow">
            <span className="h-px w-8 bg-primary/50" />
            Notes &amp; Guides
          </div>
          <h1 className="display-heading mt-6 max-w-4xl text-balance text-6xl text-foreground sm:text-7xl md:text-8xl">
            Distilled knowledge,{" "}
            <span className="font-serif italic normal-case tracking-normal text-primary">
              freely shared.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Engineering write-ups, coaching guides, and the occasional essay. I
            write these so I only have to explain something well once — then
            point people here.
          </p>
        </div>
      </section>

      <section className="container pb-28">
        <NotesGrid notes={notes} categories={categories} />
      </section>
    </div>
  );
}
