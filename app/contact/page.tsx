import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient text-foreground selection:bg-primary selection:text-primary-foreground">
      <main className="max-w-[34rem] mx-auto px-6 pt-16 pb-24 sm:pt-20 font-sans">
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm text-muted-foreground flex items-center gap-2 mb-6 transition-colors duration-150 ease-[var(--ease-out)] hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </span>
          <h1 className="text-3xl text-primary font-semibold mt-2 mb-2">
            Get in touch
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Got an opportunity or just want to chat? Fill out the form below.
          </p>
        </div>

        <ContactForm />
      </main>
    </div>
  );
}
