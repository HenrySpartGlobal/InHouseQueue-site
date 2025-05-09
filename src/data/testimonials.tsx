import type { ReactNode } from "react";

export type Testimonial = {
  /**
   * The actual quote. Create emphasized text using <em>. To add a space at the end of a line, use `{" "}`
   *
   * @example
   * <>
   *   InHouseQueue is amazing, <em>loved using feature a<em>
   *   {" "}and it has helped community engagement... etc etc
   * </>
   */
  quote: ReactNode | string;

  author: {
    /**
     * The URL or imported path to an image
     */
    icon: string;
    name: string;

    social?: {
      url: string;
      handle: string;
    };

    /**
     * Displays like this:
     * - {.author.role} @ {.server.name}
     * @example Server Admin, User
     */
    role?: string;
  };

  server?: {
    /**
     * The name of the server
     */
    name?: string;

    /**
     * Approximate server size
     * @example "500", "1.4K"
     */
    size?: string;

    /**
     * URL to redirect to upon clicking
     */
    href?: string;
  };
};

/**
 * Shows at the top of the website
 */
export const MAIN_TESTIMONIALS = [
  {
    quote: (
      <>
        The Inhouse bot is an <em>amazing opportunity</em> to host inhouses for
        our community, grow bonds and make it an enjoyable feature. Super easy
        to manage and <em>great support 24/7</em> from the developer team.
      </>
    ),
    author: {
      icon: "https://d1jcobewzbwt6k.cloudfront.net/nord-micheal.webp",
      name: "Michel_klp",
      role: "CEO & Co-Founder",
      social: {
        handle: "@Michel_klp",
        url: "https://x.com/Michel_klp",
      },
    },
    server: {
      href: "https://discord.gg/68k4WWpJ4N",
      name: "NORDEsports",
    },
  },
  {
    quote: (
      <>
        InHouseQueue was <em>exactly what we needed</em> in the LG Unite Discord
        Server. Everyone loved the <em>intuitive and easy to use design</em>. It
        was a big part of our success in creating an active community.
      </>
    ),
    author: {
      icon: "https://d1jcobewzbwt6k.cloudfront.net/slashcan.webp",
      name: "slashcan",
      role: "Pro Player",
      social: {
        handle: "@slashunite",
        url: "https://x.com/slashunite",
      },
    },
    server: {
      href: "https://discord.gg/QB7PMqPnMX",
      name: "Luminosity Gaming, Pokemon World Champion",
    },
  },
  {
    quote: (
      <>
        This bot is great and has <em>helped us grow our community</em>. We&apos;re
        organizing prize tournaments and <em>helping players improve</em>.
      </>
    ),
    author: {
      icon: "https://d1jcobewzbwt6k.cloudfront.net/astini.webp",
      name: "AstiniDota",
      role: "Professional Dota 2 Coach",
    },
    server: {
      href: "https://discord.gg/3FY8wn3S",
      name: "PARIVISION, previously C9",
    },
  },
] satisfies Testimonial[];

/**
 * Shows at the bottom of the site in smaller cards
 */
export const SECONDARY_TESTIMONIALS = [
  {
    quote: (
      <>
        The InHouse bot is the <em>easiest and best way</em> for us to host
        custom games in our server. You can set it up for any game and virtually
        whatever settings you need. The bot is easy to use and easy to setup.
        The <em>support staff goes above and beyond</em> to assist you with any
        problems you may have. We currently use the bot to run customs for two
        different games and can&apos;t wait for them to add more.
      </>
    ),
    author: {
      icon: "https://d1jcobewzbwt6k.cloudfront.net/sarebear.webp",
      name: "sarebear",
    },
    server: {
      href: "https://discord.gg/zP46ng8pXN",
      name: "Better Vibes",
    },
  },
  {
    quote: (
      <>
        Honestly it’s really good, it’s <em>super easy to manage</em>, maintain
        and personalize, people from my server love it and everyday we have
        like, 2/3 closed League of Legends queues at the same time, without the
        bot I can&apos;t imagine the work to organize the game matches, thanks for{" "}
        <em>making our life easier</em> &lt;3
      </>
    ),
    author: {
      icon: "https://d1jcobewzbwt6k.cloudfront.net/khawan_c.webp",
      name: "khawan_c",
    },
    server: {
      href: "https://discord.gg/tdrlol",
      name: "LOLBR - Toca de Raposa",
    },
  },
  {
    quote: (
      <>
        We&apos;ve been using the inhouse bot for a little over a month now.
        Immediately, we wanted to get the premium but wanted to test it out. We
        were popping with inhouses for the first week so we upgraded it to tier
        2 and <em>immediately got more people playing</em>. It&apos;s been pretty
        good at <em>helping us build our community</em>.
      </>
    ),
    author: {
      icon: "https://d1jcobewzbwt6k.cloudfront.net/dranreb22.webp",
      name: "dranreb22",
    },
    server: {
      href: "https://discord.gg/yNF2CztJdq",
      name: "Blighted Badlands",
    },
  },
  {
    quote: (
      <>
        The inhouse queue bot has been a <em>fantastic addition</em> to our
        Pokemon Unite server. It has really <em>helped our community grow</em>{" "}
        through allowing each other to play some fun games together. It&apos;s also
        helped newer players practice more with competitive players that have
        played longer so they can learn new things. I cannot recommend this bot
        enough for making it so simple to host inhouse games in your community!
      </>
    ),
    author: {
      icon: "https://d1jcobewzbwt6k.cloudfront.net/taddyyy.webp",
      name: "taddyyy",
    },
    server: {
      href: "https://discord.gg/TmqfPVgYCV",
      name: "OCE Pokemon Unite",
    },
  },
] satisfies Testimonial[];
