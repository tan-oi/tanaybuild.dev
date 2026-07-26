import { getAllWork, getWorkBySlug } from "@/lib/work";
import { experiences } from "@/lib/data";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllWork().map((w) => ({ slug: w.slug }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const meta = experiences.find((e) => e.slug === slug);

  return (
    <div className="bg-gradient min-h-screen">
      <div className="max-w-2xl mx-auto px-6 pt-16 pb-24 sm:pt-20">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-150 ease-[var(--ease-out)] hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Back home
        </Link>

        <header className="mb-10 pb-8 border-b border-border/50">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Work
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight mt-2">
            {work.title}
          </h1>
          {meta && (
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-2">
              {meta.role} · {meta.start} – {meta.end}
            </p>
          )}
          <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl">
            {work.description}
          </p>

          {meta?.companyUrl && (
            <Link
              href={meta.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm text-foreground transition-colors duration-150 ease-[var(--ease-out)] hover:text-primary mt-5"
            >
              Visit {meta.company}
              <ArrowUpRight className="size-3.5 transition-transform duration-150 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </header>

        <article className="prose prose-invert prose-zinc max-w-none selection:bg-primary selection:text-primary-foreground prose-headings:text-primary prose-headings:font-semibold prose-h1:hidden prose-h2:text-xl prose-h3:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-hr:border-border/50 prose-li:text-muted-foreground">
          <MDXRemote source={work.content} />
        </article>
      </div>
    </div>
  );
}
