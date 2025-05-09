import type { LeaderboardCardProps } from "@/app/leaderboard/[guild]/_components/Cards";

export default function RankCard(props: LeaderboardCardProps) {
  return (
    <div
      className="z-50 rounded-md bg-background-accent px-8 py-4"
      data-aos="fade-up"
      data-aos-delay={props.index * 100}
    >
      <div className="flex flex-row flex-wrap justify-center gap-[10px] align-middle md:flex-col md:justify-normal">
        <h1 className="text-6xl font-extrabold">
          {props.index + 1}
          {props.index === 1 ? "ND" : "RD"}
        </h1>
        <div>
          <h2 className="text-2xl font-bold">{props.entry.ign}</h2>
          <p className="text-2xl">{Math.round(props.entry.mmr)} MMR</p>
        </div>
      </div>
    </div>
  );
}
