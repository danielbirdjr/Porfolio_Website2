import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div className="absolute inset-0 hero-glow" aria-hidden />
      <div className="container relative text-center">
        <p className="font-serif text-7xl font-medium text-primary sm:text-8xl">
          404
        </p>
        <h1 className="mt-6 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
          This page wandered off.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/">Back home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
