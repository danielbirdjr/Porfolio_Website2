import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { mdxComponents } from "@/components/notes/mdx-components";
import { formatDate, getAllNotes, getNoteBySlug } from "@/lib/notes";

export function generateStaticParams() {
  return getAllNotes().map((note) => ({ slug: note.meta.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) return { title: "Note not found" };
  return {
    title: note.meta.title,
    description: note.meta.description,
    openGraph: {
      type: "article",
      title: note.meta.title,
      description: note.meta.description,
      publishedTime: note.meta.date,
    },
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) notFound();

  return (
    <article className="border-t border-border">
      <div className="container max-w-3xl pt-32 pb-12 sm:pt-40">
        <Link
          href="/notes"
          className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          All notes
        </Link>

        <header className="mt-8">
          <div className="flex items-center gap-3">
            <Badge variant="accent">{note.meta.category}</Badge>
            <time
              dateTime={note.meta.date}
              className="text-sm text-muted-foreground"
            >
              {formatDate(note.meta.date)}
            </time>
          </div>
          <h1 className="mt-5 text-balance font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
            {note.meta.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {note.meta.description}
          </p>
        </header>
      </div>

      <div className="container max-w-3xl pb-28">
        <div className="prose prose-note prose-lg max-w-prose prose-headings:font-serif prose-headings:font-medium prose-h2:mt-12 prose-h2:text-3xl prose-h3:text-2xl prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-pre:rounded-xl prose-pre:border prose-pre:border-border prose-img:rounded-xl">
          <MDXRemote source={note.content} components={mdxComponents} />
        </div>
      </div>
    </article>
  );
}
