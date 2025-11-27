import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient text-foreground selection:bg-primary selection:text-primary-foreground">
      <main className="max-w-2xl mx-auto px-6 py-16 font-sans">
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm text-muted-foreground flex items-center gap-2 mb-6"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
          <h1 className="text-3xl text-primary font-semibold mb-2">
            Contact Me
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
