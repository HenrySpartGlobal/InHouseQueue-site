import { type Testimonial } from "@/data/testimonials";
import Image from "next/image";

/**
 * Renders a single secondary testimonial card
 * @param props testimonial to show
 * @returns
 */
export function SecondaryTestimonialDisplay(props: {
  testimonial: Testimonial;
  aosIndex?: number;
}) {
  return (
    <article
      className="rounded-md bg-background-accent p-3 text-base"
      data-aos="fade-up"
      data-aos-delay={(props.aosIndex ?? 0) * 100}
    >
      <p className="whitespace-pre-wrap text-gray-50 [&_em]:font-bold [&_em]:not-italic">
        {props.testimonial.quote}
      </p>

      <div className="mt-3 flex flex-row items-center gap-2">
        <Image
          src={props.testimonial.author.icon}
          alt={`${props.testimonial.author.name}'s Icon`}
          width={42}
          height={42}
          className="rounded-full"
        />

        <p className="text-sm text-gray-200">
          <span className="font-semibold">{props.testimonial.author.name}</span>
          <br />
          {props.testimonial.author.role}
          {props.testimonial.author.role &&
            props.testimonial.server?.name &&
            " @ "}
          {props.testimonial.server?.href ? (
            <a
              href={props.testimonial.server.href}
              target="_blank"
              className="underline"
            >
              {props.testimonial.server?.name}
            </a>
          ) : (
            props.testimonial.server?.name
          )}
        </p>
      </div>
    </article>
  );
}
