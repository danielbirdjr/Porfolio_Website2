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
      <section className="relative">
        <div className="container relative pt-40 pb-16 sm:pt-48 sm:pb-20">
          <div className="eyebrow">
            <span className="h-px w-8 bg-primary/40" />
            Notes &amp; Guides
          </div>
          <h1 className="display-heading mt-6 max-w-4xl text-balance text-[clamp(2.5rem,4vw+1.5rem,4.5rem)] text-foreground">
            Distilled knowledge,{" "}
            <span className="italic text-primary">freely shared.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Engineering write-ups, coaching guides, and the occasional essay. I
            write these so I only have to explain something well once, then point
            people here.
          </p>
        </div>
      </section>

      <section className="container pb-32">
        <NotesGrid notes={notes} categories={categories} />
      </section>
    </div>
  );
}
