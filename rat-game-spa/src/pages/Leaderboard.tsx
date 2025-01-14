import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { CircleIconButton } from "../components/CircleIconButton";
import { HighScoreRename } from "../types/HighScoreRename";
import { fetchHighScores } from "../api/high-scores";
import { faX } from "@fortawesome/free-solid-svg-icons";

enum LeaderboardType {
  Day = 1,
  Week = 2,
  Month = 3,
  AllTime = 4
}

export default function LeaderboardPage() {
  const [highScore, setHighScore] = useState<number>(0);
  const [leaderboardType, setLeaderboardType] = useState<LeaderboardType>(LeaderboardType.AllTime);

  const userId = 1;
  useEffect(() => {
    fetchHighScores(userId).then((data: HighScoreRename[]) => {
      const totalScore = data.reduce((sum, { score }) => sum + score, 0);

      setHighScore(totalScore);
    });
  }, []);

  return (
    <>
      {/* Settings Page */}
      <header>
        <CircleIconButton
          faIcon={faX}
          redirectPath="/"
          className="absolute right-3 top-3"
        />
        <h1 className="mt-20 font-bold text-big tracking-widest">leaderboards</h1>
      </header>

      <section className="flex flex-col items-center">
        <div className="flex justify-between w-2/3 max-w-xs">
          <Button
            className={`w-[49%] ${
              leaderboardType === LeaderboardType.Day
                ? "bg-black text-yellow"
                : "bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
            }`}
            onClick={() => setLeaderboardType(LeaderboardType.Day)}
          >
            today
          </Button>

          <Button
            className={`w-[49%] ${
              leaderboardType === LeaderboardType.Week
                ? "bg-black text-yellow"
                : "bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
            }`}
            onClick={() => setLeaderboardType(LeaderboardType.Week)}
          >
            week
          </Button>
        </div>
        
        <div className="flex justify-between w-2/3 max-w-xs">
          <Button
            className={`w-[49%] ${
              leaderboardType === LeaderboardType.Month
                ? "bg-black text-yellow"
                : "bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
            }`}
            onClick={() => setLeaderboardType(LeaderboardType.Month)}
          >
            month
          </Button>

          <Button
            className={`w-[49%] ${
              leaderboardType === LeaderboardType.AllTime
                ? "bg-black text-yellow"
                : "bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
            }`}
            onClick={() => setLeaderboardType(LeaderboardType.AllTime)}
          >
            all time
          </Button>
        </div>
      </section>

      <div className="flex flex-col items-center">
      {/* <RatEars color={DIFFICULTY_MAP[props.test.difficulty].color} />

      <RatBody words={[props.test.item1, props.test.item2, props.test.item3]} /> */}

      {/* Answer */}
      {/* <div className="w-2/3 mt-5 max-w-xs">
        <input
          autoFocus
          className={`w-full py-2 text-center focus:outline-none border-2 border-gray text-medium  bg-gray rounded-b-2xl focus:border-gray-dark ${
            incorrect && "text-difficulty-hard animate-incorrect"
          }`}
          disabled={props.disabled}
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        ></input>
      </div> */}

      {/* Skip */}
      {/* <Button
        className="bg-pink active:bg-pink-dark lg:hover:bg-pink-dark border-pink-dark text-small"
        onClick={props.onSkipTest}
      >
        skip
      </Button> */}
    </div>
    </>
  );
}
