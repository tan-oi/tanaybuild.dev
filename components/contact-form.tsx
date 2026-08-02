"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email(),
  phone: z.string().min(10, "Invalid phone number"),
  message: z.string().min(10, "Message is too short"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: ContactFormData) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    reset();
  };

  return (
    <div className="rounded-xl p-8 backdrop-blur-sm">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="name" className="text-muted-foreground">
            Name
          </Label>
          <Input
            id="name"
            {...register("name")}
            className="border-input flex h-10 w-full rounded-md border px-3 py-2 text-sm"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-destructive text-xs">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-muted-foreground">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-destructive text-xs">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-muted-foreground">
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            className="border-input bg-background flex h-10 w-full rounded-md border px-3 py-2 text-sm"
            placeholder="+1 (555) 000-0000"
          />
          {errors.phone && (
            <p className="text-destructive text-xs">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-muted-foreground">
            Message
          </Label>
          <Textarea
            id="message"
            rows={4}
            {...register("message")}
            className="border-input bg-background flex min-h-[120px] w-full resize-none rounded-md border px-3 py-2 text-sm"
            placeholder="Tell me about your project..."
          />
          {errors.message && (
            <p className="text-destructive text-xs">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          className="bg-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
