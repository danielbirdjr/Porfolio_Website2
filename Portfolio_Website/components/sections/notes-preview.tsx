import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { NoteCard } from "@/components/notes/note-card";
import { getAllNotes } from "@/lib/notes";

export function NotesPreview() {
  const notes = getAllNotes().slice(0, 3);
  if (notes.length === 0) return null;

  return (
    <section id="notes" className="border-t border-border py-28 sm:py-40 lg:py-48">
      <div className="container">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-5">
            <SectionHeading index="04" label="Notes & Guides">
              Things worth{" "}
              <span className="italic text-primary">writing down.</span>
            </SectionHeading>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Engineering notes, coaching guides, and thoughts — distilled so
              they save someone else the time I spent learning them.
            </p>
            <p className="annotation text-xl">straight from the notebook</p>
          </div>
          <Link
            href="/notes"
            className="group inline-flex shrink-0 items-center gap-1.5 text-base font-medium text-primary transition-colors hover:text-primary/80"
          >
            <span className="link-underline">View all notes</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <RevealItem key={note.meta.slug} className="h-full">
              <NoteCard note={note} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
