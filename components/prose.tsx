/**
 * Long-form article body. Differs from list copy deliberately:
 *  - headings step up to 17px, so sections are visible while scanning
 *  - measure is capped near 70ch; the page container is wider than is
 *    comfortable to read at 15px
 *  - body sits near foreground rather than muted — muted is for two-line
 *    descriptions, not for a thousand words
 */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-headings:font-medium prose-headings:text-foreground prose-headings:tracking-[-0.01em] prose-h1:hidden prose-h2:text-[21px] prose-h2:mt-14 prose-h2:mb-4 prose-h3:font-mono prose-h3:text-[12px] prose-h3:tracking-[0.05em] prose-h3:text-accent prose-h3:mt-10 prose-h3:mb-2.5 prose-p:text-[15px] prose-p:leading-[1.8] prose-p:text-foreground/85 prose-li:text-[15px] prose-li:leading-[1.8] prose-li:text-foreground/85 prose-li:marker:text-subtle prose-strong:font-medium prose-strong:text-foreground prose-em:text-foreground/70 prose-a:text-accent prose-a:underline prose-a:decoration-accent/40 prose-a:underline-offset-[3px] hover:prose-a:decoration-accent prose-code:rounded prose-code:bg-panel prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[13px] prose-code:font-normal prose-code:text-foreground prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-lg prose-pre:bg-panel prose-pre:ring-1 prose-pre:ring-inset prose-pre:ring-border prose-blockquote:border-l prose-blockquote:border-border-strong prose-blockquote:not-italic prose-blockquote:text-muted-foreground prose-hr:border-border prose-img:rounded-lg prose-img:ring-1 prose-img:ring-inset prose-img:ring-border mt-8">
      {children}
    </div>
  );
}
