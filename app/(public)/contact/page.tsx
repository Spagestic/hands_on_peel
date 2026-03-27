import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  bodyClass,
  containerClass,
  sectionClass,
  SectionHeading,
} from "../(home)/components/shared";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className={sectionClass}>
        <div className={containerClass}>
          <SectionHeading
            eyebrow="Contact us"
            title="Visit or get in touch"
            description="Find us in Central, Hong Kong, or send us a message and our team will get back to you."
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <article className="border border-foreground/10 bg-background p-6 sm:p-8">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">
                Our location
              </h2>
              <p className={`${bodyClass} mt-4`}>
                11 Peel Street, Central
                <br />
                Hong Kong
              </p>

              <div className="mt-6 space-y-2 text-base text-foreground/90">
                <a
                  href="tel:+85225100637"
                  className="block transition-colors hover:text-muted-foreground"
                >
                  +852 2510 0637
                </a>
                <a
                  href="mailto:hello@craftsonpeel.com"
                  className="block underline underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  hello@craftsonpeel.com
                </a>
              </div>

              <div className="mt-8 overflow-hidden border border-foreground/10">
                <iframe
                  title="Crafts on Peel map"
                  src="https://maps.google.com/maps?q=Crafts%20on%20Peel&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="h-[340px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </article>

            <article className="border border-foreground/10 bg-background p-6 sm:p-8">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">
                Send us a message
              </h2>
              <p className={`${bodyClass} mt-4`}>
                Interested in our programmes, collaborations, or venue visits?
                Fill in the form and we will respond shortly.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground"
                    >
                      Name
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your full name"
                      className="h-12 rounded-none border-foreground/10 bg-background px-4 text-sm placeholder:text-muted-foreground/70"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="h-12 rounded-none border-foreground/10 bg-background px-4 text-sm placeholder:text-muted-foreground/70"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-subject"
                    className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground"
                  >
                    Subject
                  </label>
                  <Input
                    id="contact-subject"
                    name="subject"
                    placeholder="How can we help?"
                    className="h-12 rounded-none border-foreground/10 bg-background px-4 text-sm placeholder:text-muted-foreground/70"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    placeholder="Write your message here..."
                    className="min-h-40 rounded-none border-foreground/10 bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/70"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-1 h-auto rounded-none border border-foreground bg-primary px-6 py-3 text-xs font-mono uppercase tracking-[0.22em] text-background transition-colors hover:bg-transparent hover:text-foreground"
                >
                  Submit inquiry
                </Button>
              </form>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
