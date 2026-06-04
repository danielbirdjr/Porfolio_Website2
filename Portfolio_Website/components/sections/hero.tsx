"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowDoodle } from "@/components/section-heading";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-glow" aria-hidden />

      {/* Ghost background wordmark */}
      <div
        className="pointer-events-none absolute inset-0 hidden items-end justify-end overflow-hidden lg:flex"
        aria-hidden
      >
        <span className="ghost-text translate-x-[6%] translate-y-[12%] text-[26rem]">
          DB
        </span>
      </div>

      <div className="container relative flex min-h-[92vh] flex-col justify-center py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.div variants={item}>
            <span className="eyebrow flex-wrap">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              Engineer
              <span className="text-primary/40">·</span>
              Graduate Student
              <span className="text-primary/40">·</span>
              Coach
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="display-heading mt-7 text-balance text-[3.25rem] text-foreground sm:text-7xl md:text-8xl lg:text-[7.5rem]"
          >
            Building useful things with{" "}
            <span className="font-serif italic normal-case tracking-normal text-primary">
              AI
            </span>{" "}
            <span className="block sm:inline">
              — and making people{" "}
              <span className="font-serif italic normal-case tracking-normal text-primary">
                stronger.
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            I&apos;m Daniel Bird — a software engineer and Georgia Tech M.S.
            student in AI/ML. I build practical software, coach lifters online,
            and write down what I learn so it&apos;s useful to someone else.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-24"
          >
            <div className="relative">
              {/* Handwritten note pointing down into the primary CTA */}
              <div
                className="pointer-events-none absolute bottom-full left-5 mb-1 hidden -rotate-6 select-none flex-col items-start lg:flex"
                aria-hidden
              >
                <span className="annotation text-2xl">start here</span>
                <ArrowDoodle className="ml-8 h-9 w-11 text-primary/70" />
              </div>

              <Button asChild size="lg" className="group w-full sm:w-auto">
                <Link href="/#work">
                  See my work
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>

            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/notes">
                Read my notes
                <ArrowUpRight />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />
    </section>
  );
}
