import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/rat-logo.png";
import { Button } from "../components/Button";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GameDifficulty } from "../types/GameDifficulty";

export default function GameOverPage() {
  const { state } = useLocation();
  const { score } = state;

  const [highscore, setHighscore] = useLocalStorage("highscore", 0);
  const [newHighscore, setNewHighscore] = useState<boolean>(false);

  const userId = 1;

  useEffect(() => {
    if (score > highscore) {
      // setHighscore(score);
      setNewHighscore(true);

      // push the highscore to the backend 
      fetch(`http://localhost:5104/${userId}/highscore`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ difficulty: GameDifficulty.Easy, score: score })
        }
      )
      .catch(error => console.error('error updating highscore:', error))
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
            newHighscore && "animate-bounce"
          }`}
        >
          {newHighscore ? "highscore" : "score"}
        </h2>
        <span className="font-bold text-big">{score}</span>
      </div>

      <section className="flex flex-col items-center my-5">
        <Button
          redirectPath="/game"
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
