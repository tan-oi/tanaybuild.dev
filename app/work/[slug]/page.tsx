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
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="size-4" />
          Back home
        </Link>

        <header className="mb-10 pb-8 border-b border-border/50">
          <h1 className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
            {work.title}
          </h1>
          {meta && (
            <p className="text-sm text-muted-foreground font-mono mt-2">
              {meta.role} · {meta.start} — {meta.end}
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
              className="inline-flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors mt-5"
            >
              Visit {meta.company}
              <ArrowUpRight className="size-3.5" />
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
