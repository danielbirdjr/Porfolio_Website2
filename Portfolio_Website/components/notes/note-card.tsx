import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate, type Note } from "@/lib/notes-shared";

export function NoteCard({ note }: { note: Note }) {
  const { slug, title, description, category, date } = note.meta;

  return (
    <Link href={`/notes/${slug}`} className="group block h-full">
      <article className="flex h-full flex-col rounded-lg border border-border bg-card p-8 transition-colors duration-200 hover:border-primary/50">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="accent">{category}</Badge>
          <time
            dateTime={date}
            className="text-xs text-muted-foreground"
          >
            {formatDate(date)}
          </time>
        </div>

        <h3 className="mt-4 font-serif text-2xl font-medium leading-snug transition-colors group-hover:text-primary">
          {title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary">
          Read
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </article>
    </Link>
  );
}
