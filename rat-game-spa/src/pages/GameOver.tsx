import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/rat-logo.png";
import { Button } from "../components/Button";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GameDifficulty } from "../types/GameDifficulty";
import { updateHighScore } from "../api/high-scores";

export default function GameOverPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { score, difficulty } = state;

  const [highScore] = useLocalStorage("highScore", 0);
  const [newHighScore, setNewHighScore] = useState<boolean>(false);

  const userId = 1;

  useEffect(() => {
    if (score > highScore) {
      // setHighscore(score);
      updateHighScore(score, difficulty, userId).then(() => {
        setNewHighScore(true);
      });
    }
  }, []);

  return (
    <>
      <header>
        <img className="my-5 mx-auto w-3/4 max-w-xs" src={logo} />
        <h1 className="font-bold text-big tracking-widest">Game Over</h1>
      </header>

      <div className="my-10">
        <h2
          className={`font-bold mb-1 text-medium ${
            newHighScore && "animate-bounce"
          }`}
        >
          {newHighScore ? "highScore" : "score"}
        </h2>
        <span className="font-bold text-big">{score}</span>
      </div>

      <section className="flex flex-col items-center my-5">
        <Button
          onClick={() =>
            navigate("/game", { state: { difficulty: difficulty } })
          }
          className="bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
        >
          play again
        </Button>
        <Button
          redirectPath="/"
          className="bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
        >
          home
        </Button>
      </section>
    </>
  );
}
