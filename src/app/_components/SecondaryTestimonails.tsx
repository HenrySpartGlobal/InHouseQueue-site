import { SECONDARY_TESTIMONIALS, type Testimonial } from "@/data/testimonials";
import { SecondaryTestimonialDisplay } from "./SecondaryTestimonialDisplay";

// break data into three columns
const COLUMN_COUNT = 3;
const COLUMNS = balanceTestimonials(SECONDARY_TESTIMONIALS);

/**
 * Displays all secondary testimonials with a header
 * @param aosIndex - Will animate in order of the index (delay * 100ms)
 */
export function SecondaryTestimonials(props: { aosIndex?: number }) {
  return (
    <section
      className="relative py-20"
      data-aos="fade-up"
      data-aos-delay={(props.aosIndex ?? 0) * 100}
    >
      {/* overlay to fade to gray */}
      <div className="pointer-events-none absolute -bottom-4 left-0 right-0 h-80 bg-gradient-to-b from-background-accent/0 to-background-accent" />

      <h1 className="text-balance pb-6 text-center text-2xl font-bold text-white md:text-3xl">
        Don&apos;t just take our word for it,
        <br />
        <span className="text-primary">
          InHouseQueue is loved by Admins and Players
        </span>
      </h1>

      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:gap-6 lg:p-8">
        {COLUMNS.map((column, i) => (
          <div key={i} className="flex flex-col gap-4">
            {column.map((testimonial, j) => (
              <SecondaryTestimonialDisplay
                testimonial={testimonial}
                key={j}
                aosIndex={testimonial.index}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

type TestimonialWithIndex = Testimonial & { index: number };

/**
 * Splits single array of testimonials into multiple columns,
 * with each column having the same number of testimonials.
 * If there is one left over, it will be added to the middle column.
 * @param testimonials
 */
function balanceTestimonials(testimonials: Testimonial[]) {
  // if theres one left over, add it to middle column instead of first
  const remainder = testimonials.length % COLUMN_COUNT;
  const maxIndex =
    remainder === 1
      ? Math.floor(testimonials.length / COLUMN_COUNT) * COLUMN_COUNT
      : testimonials.length;

  const balancedTestimonials: TestimonialWithIndex[][] = new Array(COLUMN_COUNT)
    .fill(null)
    .map(() => new Array<TestimonialWithIndex>(maxIndex));

  for (let i = 0; i < maxIndex; i++) {
    balancedTestimonials[i % COLUMN_COUNT]!.push({
      ...testimonials[i]!,
      index: i,
    });
  }

  // if there is a remainder, add it to the middle column
  if (remainder === 1) {
    balancedTestimonials[1]!.push({
      ...testimonials[maxIndex]!,
      index: maxIndex,
    });
  }

  return balancedTestimonials;
}
