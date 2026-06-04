"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NoteCard } from "@/components/notes/note-card";
import type { Note } from "@/lib/notes-shared";
import { cn } from "@/lib/utils";

export function NotesGrid({
  notes,
  categories,
}: {
  notes: Note[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");
  const filters = ["All", ...categories];
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(
    () =>
      active === "All"
        ? notes
        : notes.filter((n) => n.meta.category === active),
    [active, notes],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter notes by category">
        {filters.map((filter) => {
          const isActive = filter === active;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(filter)}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                isActive
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground",
              )}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-muted-foreground">
          No notes in this category yet — check back soon.
        </p>
      ) : (
        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((note) => (
              <motion.div
                key={note.meta.slug}
                layout
                initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
              >
                <NoteCard note={note} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
