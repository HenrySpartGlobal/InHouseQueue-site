import Feature from "../../components/Feature";
import FeatureImage2 from "../../assets/features/2.png";

export default function Feature2() {
  return (
    <Feature
      title="Unlock Your Players True Potential"
      description="In-House Queue bot features a built-in matchmaking system, ensuring fair and balanced matchups. In addition, our bot offers leaderboards, MVP voting, and other features to add depth and excitement to your gaming experience. That's not all, Take to the battle field with your Duo partner and track your stats!"
      direction="rtl"
      image={FeatureImage2}
    >
      {/* checkmarks */}
      <ol className="checkmark-list">
        {
          [
            "Unique In-Game role assignment",
            "Unlock built in Achievements",
            "Spectators Buttons",
            "Customizable Ready Up Check",
            "Vote for your MVP of the Match!",
            "Track your stats and match history",
            "Dedicated server site leaderboard",
            "Duo Queue",
            "Captain Queue",
            "Customize Team sizes (1v1 - 8v8)",
            "More",
          ].map((item, index) => (
            <li
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {item}
            </li>
          ))
        }
      </ol>

      {/* support server */}
      <p className="mt-8">
        Contact us via our{" "}
        <a
          href="https://discord.com/invite/NDKMeT6GE7"
          target="_blank"
          rel="noreferrer"
        >
          Support Server
        </a>.
      </p>
    </Feature>
  )
}