import Banner from "../components/Banner";
import Button from "../components/Button";
import CallToAction from "../partials/Home/CallToAction";
import Feature1 from "../partials/Home/Feature1";
import Feature2 from "../partials/Home/Feature2";
import Feature3 from "../partials/Home/Feature3";
import Highlight from "../partials/Home/Highlight";
import StatCards from "../partials/Home/StatCards";
import SupportedGames from "../partials/Home/SupportedGames";
import Navbar from "../partials/Navbar";
import { MainTestimonials } from "./_components/MainTestimonial";
import { SecondaryTestimonials } from "./_components/SecondaryTestimonails";

export default function HomePage() {
  return (
    <>
      <Navbar absolute={true} />

      <Banner>
        <div className="mb-28 mt-8 flex flex-col justify-center gap-3 text-center sm:mb-8 sm:mt-0 md:mb-0">
          {/* buttons */}
          <div className="flex flex-row flex-wrap justify-center gap-8">
            <Button variant="secondary" href="/commands">
              Commands
            </Button>

            <Button
              variant="primary"
              href="https://discord.com/api/oauth2/authorize?client_id=1001168331996409856&permissions=2433051696&scope=bot"
              target="_blank"
            >
              Add to Discord
            </Button>

            <Button variant="secondary" href="https://docs.inhousequeue.xyz">
              Documentation
            </Button>
          </div>
        </div>
      </Banner>

      {/* stat cards */}
      <StatCards />

      {/* page content */}
      <div className="flex flex-col gap-4">
        {/* main content part 1 */}
        <div className="mx-auto flex max-w-[96rem] flex-col justify-center gap-28">
          {/* supported games */}
          <SupportedGames />

          {/* feature 1 */}
          <Feature1 />

          {/* testimonials */}
          <MainTestimonials />
        </div>

        {/* play practice progress */}
        {/* needs to be full width */}
        <Highlight />

        {/* main content part 2 */}
        <div className="mx-auto flex max-w-[96rem] flex-col justify-center gap-28">
          {/* feature 2 */}
          <Feature2 />
        </div>

        {/* feature 3 */}
        <div className="bg-background-accent">
          <div className="mx-auto flex max-w-[96rem] flex-col justify-center gap-28 pb-4">
            <Feature3 />
          </div>
        </div>

        <SecondaryTestimonials />

        <div className="bg-background-accent">
          <CallToAction />
        </div>
      </div>
    </>
  );
}
