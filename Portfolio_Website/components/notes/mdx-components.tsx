import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

/**
 * Custom renderers for MDX content. Most styling comes from the
 * `prose` / `prose-note` classes on the article wrapper; these just
 * handle the bits Tailwind Typography can't (smart internal vs.
 * external links, etc.).
 */
export const mdxComponents = {
  a: ({ href = "", children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  },
};
