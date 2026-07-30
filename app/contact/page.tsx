import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Tanay Ghoriwala",
  description: "Got an opportunity, or just want to chat?",
};

export default function ContactPage() {
  return (
    <>
      <div className="rise mb-10 [animation-delay:.12s]">
        <h1 className="text-[19px] leading-tight font-medium tracking-[-0.02em]">
          Contact
        </h1>
        <p className="mt-3 max-w-[30rem] text-[15px] text-muted-foreground text-pretty">
          Got an opportunity, or just want to chat? Fill this out — or email me
          directly at{" "}
          <a
            className="link-retract text-foreground"
            href="mailto:tan.dev.x@gmail.com"
          >
            tan.dev.x@gmail.com
          </a>
          . I actually reply.
        </p>
      </div>

      <div className="rise [animation-delay:.2s]">
        <ContactForm />
      </div>
    </>
  );
}
