import { getAllWork, getWorkBySlug } from "@/lib/work";
import { experiences, formatTags } from "@/lib/data";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Prose } from "@/components/prose";

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

  const kicker = ["Work", work.title, meta && `${meta.start} — ${meta.end}`]
    .filter(Boolean)
    .join(" · ");

  return (
    <>
      <p className="text-subtle mb-5 font-mono text-[12px] tracking-[0.05em]">
        {kicker}
      </p>

      <h1 className="text-[22px] leading-[1.35] font-medium tracking-[-0.02em] text-balance">
        {meta ? `${meta.role} at ${work.title}` : work.title}
      </h1>

      <p className="text-muted-foreground mt-4 text-[15px] text-pretty">
        {work.description}
      </p>

      {meta?.tags && meta.tags.length > 0 && (
        <p className="text-subtle mt-4 font-mono text-[12px] tracking-[0.03em]">
          {formatTags(meta.tags)}
        </p>
      )}

      {meta?.companyUrl && (
        <div className="mt-5">
          <a
            href={meta.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-subtle hover:text-foreground hover:decoration-border-strong text-[15px] underline decoration-transparent underline-offset-4 transition-[color,text-decoration-color,opacity] duration-150 ease-out active:opacity-70"
          >
            Visit {meta.company}
          </a>
        </div>
      )}

      <div className="bg-border mt-10 h-px" />

      <Prose>
        <MDXRemote source={work.content} />
      </Prose>
    </>
  );
}
