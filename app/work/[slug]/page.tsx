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
      <p className="rise mb-5 font-mono text-[12px] tracking-[0.05em] text-subtle [animation-delay:.12s]">
        {kicker}
      </p>

      <h1 className="rise text-[22px] leading-[1.35] font-medium tracking-[-0.02em] text-balance [animation-delay:.12s]">
        {meta ? `${meta.role} at ${work.title}` : work.title}
      </h1>

      <p className="rise mt-4 max-w-[34rem] text-[15px] text-muted-foreground text-pretty [animation-delay:.2s]">
        {work.description}
      </p>

      {meta?.tags && meta.tags.length > 0 && (
        <p className="rise mt-4 font-mono text-[12px] tracking-[0.03em] text-muted-foreground [animation-delay:.2s]">
          {formatTags(meta.tags)}
        </p>
      )}

      {meta?.companyUrl && (
        <div className="rise mt-5 [animation-delay:.28s]">
          <a
            href={meta.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-subtle underline decoration-transparent underline-offset-4 transition-[color,text-decoration-color,opacity] duration-150 ease-out hover:text-foreground hover:decoration-border-strong active:opacity-70"
          >
            Visit {meta.company}
          </a>
        </div>
      )}

      <div className="rise mt-10 h-px bg-border [animation-delay:.36s]" />

      <Prose>
        <MDXRemote source={work.content} />
      </Prose>
    </>
  );
}
