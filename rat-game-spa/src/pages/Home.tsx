import { faQuestion } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/rat-logo.png";
import { Button } from "../components/Button";
import { CircleIconButton } from "../components/CircleIconButton";
// import { useLocalStorage } from "../hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { fetchHighScores } from "../api/high-scores";
import { HighScoreRename } from "../types/HighScoreRename";

export default function HomePage() {
  // const [highScore] = useLocalStorage("highScore", 0);
  const [highScore, setHighScore] = useState<number>(0);

  const userId = 1;
  useEffect(() => {
    fetchHighScores(userId).then((data: HighScoreRename[]) => {
      const totalScore = data.reduce((sum, { score }) => sum + score, 0);

      setHighScore(totalScore);
    });
  }, []);

  return (
    <>
      <header>
        <CircleIconButton
          faIcon={faQuestion}
          redirectPath="/how-to"
          className="absolute right-3 top-3"
          dataCy="how-to-link"
        />
        <img className="my-5 mx-auto w-3/4 max-w-xs" src={logo} />
        <h1 className="text-big font-bold">
          <span className="bg-black text-yellow inline-flex h-20 w-20 items-center justify-center rounded-full">
            R
          </span>{" "}
          <span className="bg-black text-yellow inline-flex h-20 w-20 items-center justify-center rounded-full">
            A
          </span>{" "}
          <span className="bg-black text-yellow inline-flex h-20 w-20 items-center justify-center rounded-full">
            T
          </span>
        </h1>
        <h2 className="my-1 text-medium">the game</h2>
      </header>

      <section className="flex flex-col items-center">
        <Button
          redirectPath="/difficulty"
          className="bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
          dataCy="difficulty-link"
        >
          play
        </Button>
        <Button
          redirectPath="/leaderboard"
          className="bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
          dataCy="difficulty-link"
        >
          leaderboards
        </Button>
        <Button
          redirectPath="/settings"
          className="bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
          dataCy="settings-link"
        >
          settings
        </Button>
      </section>

      <section className="my-5">
        <p className="font-bold text-big" data-cy="highScore">
          {highScore}
        </p>
        <p className="text-medium">highScore</p>
      </section>
    </>
  );
}
