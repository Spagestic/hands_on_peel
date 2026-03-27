import {
  bodyClass,
  containerClass,
  ImageFrame,
  sectionClass,
  SectionHeading,
} from "../(home)/components/shared";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className={sectionClass}>
        <div className={containerClass}>
          <SectionHeading
            eyebrow="Who are we"
            title="About Crafts on Peel"
            description="Crafts on Peel is a local non-profit charitable foundation dedicated to reviving, reinterpreting, and perpetuating traditional craftsmanship."
          />

          <div className="grid gap-6">
            <article className="border border-foreground/10 bg-muted/30 p-6 sm:p-8">
              <p className={bodyClass}>
                Crafts on Peel fosters collaborations between traditional
                craftsmen and contemporary artisans through apprenticeship and
                exchange of techniques, with the aim of nurturing younger
                generations to incorporate traditional skills into innovative
                contemporary design.
              </p>
              <p className={`${bodyClass} mt-6`}>
                Located in a historic building in the heart of Hong Kong,
                Crafts on Peel serves as a multi-purpose creative venue,
                promoting the appreciation of craftsmanship and celebrating
                shared cultural heritage through exhibitions, workshops, and
                its Artisan-in-Residence programme.
              </p>
            </article>

            <article className="border border-foreground/10 bg-background p-6 sm:p-8">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">
                The meaning behind our identity
              </h2>
              <p className={`${bodyClass} mt-4`}>
                The essence of craftsmanship lies in the hands. At the core of
                Crafts on Peel is the stories of craftsmen. Our logo reflects a
                commitment to preserving Chinese cultural heritage, composed of
                a pair of hands in two Chinese characters, the fundamental tool
                for a craftsman.
              </p>
              <p className={`${bodyClass} mt-6`}>
                The hand character, together with its inverted mirrored image,
                forms the Chinese character for self, expressing the idea that
                each craft originates from a personal story of an individual
                craftsman. The two hands also symbolize the relationship between
                master and apprentice as skills are passed from one generation
                to the next.
              </p>
            </article>

            <article className="border border-foreground/10 bg-background p-6 sm:p-8">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">
                A place where history meets the future
              </h2>
              <p className={`${bodyClass} mt-4`}>
                Set in a historical walk-up built in 1948, the building
                embodies Crafts on Peel&apos;s intent to connect history with
                the future. To preserve and revitalize, modernized materials
                are used in various finishes that contrast with the existing
                masonry building, exposed brick walls, and staircases.
              </p>
              <p className={`${bodyClass} mt-6`}>
                This juxtaposition of the new and the old reflects our mission:
                honoring traditional craftsmanship while creating space for
                contemporary interpretation and innovation.
              </p>
            </article>

            <article className="border border-foreground/10 bg-background p-6 sm:p-8">
              <h2 className="text-2xl font-medium tracking-tight text-foreground">
                Our location
              </h2>
              <p className={`${bodyClass} mt-4`}>
                A glimpse of our historic walk-up and interior spaces where
                exhibitions, workshops, and artisan exchanges take place.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <ImageFrame
                  src="https://www.craftsonpeel.com/wp-content/uploads/2019/12/BYU1315-scaled.jpg"
                  alt="Crafts on Peel location exterior"
                  className="aspect-4/3"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <ImageFrame
                  src="https://www.craftsonpeel.com/wp-content/uploads/2019/12/BYU1336-scaled.jpg"
                  alt="Crafts on Peel staircase and interior details"
                  className="aspect-4/3"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <ImageFrame
                  src="https://www.craftsonpeel.com/wp-content/uploads/2019/12/BYU0742-1-scaled.jpg"
                  alt="Crafts on Peel gallery interior"
                  className="aspect-4/3"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <ImageFrame
                  src="https://www.craftsonpeel.com/wp-content/uploads/2019/12/BYU1110-1-scaled.jpg"
                  alt="Crafts on Peel exhibition space"
                  className="aspect-4/3"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <ImageFrame
                  src="https://www.craftsonpeel.com/wp-content/uploads/2019/12/BYU1312-2-1-scaled.jpg"
                  alt="Crafts on Peel building and heritage architecture"
                  className="aspect-4/3 sm:col-span-2 lg:col-span-1"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 100vw, 100vw"
                />
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
