"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0, 0, 0.2, 1] as const },
    },
  };

  return (
    <section className="relative">
      <div className="container relative flex min-h-[90vh] flex-col justify-center py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <span className="eyebrow flex-wrap">
              Engineer
              <span className="text-primary/40">·</span>
              Graduate Student
              <span className="text-primary/40">·</span>
              Coach
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="display-heading mt-8 text-balance text-[clamp(2.5rem,4vw+1.5rem,4.5rem)] text-foreground"
          >
            Building useful things with{" "}
            <span className="italic text-primary">AI</span> — and making people{" "}
            <span className="italic text-primary">stronger.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-[60ch] text-lg leading-relaxed text-muted-foreground"
          >
            I&apos;m Daniel Bird — a software engineer and Georgia Tech M.S.
            student in AI/ML. I build practical software, coach lifters online,
            and write down what I learn so it&apos;s useful to someone else.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg" className="group w-full sm:w-auto">
              <Link href="/#work">
                See my work
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Link href="/notes">
                Read my notes
                <ArrowUpRight />
              </Link>
            </Button>
          </motion.div>

          <motion.p
            variants={item}
            className="annotation mt-8 inline-block -rotate-1 text-xl"
          >
            open to interesting problems
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
