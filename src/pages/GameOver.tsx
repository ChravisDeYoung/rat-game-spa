import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/rat-logo.png";
import { ButtonLink } from "../components/Buttons";
import { useLocalStorage } from "../hooks/useLocalStorage";

function GameOverPage() {
  const { state } = useLocation();
  const { score } = state;

  const [highscore, setHighscore] = useLocalStorage("highscore", 0);
  const [newHighscore, setNewHighscore] = useState<boolean>(false);

  useEffect(() => {
    console.log("score", score);
    console.log("highscore", highscore);

    if (score > highscore) {
      setHighscore(score);
      setNewHighscore(true);
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
        <ButtonLink redirectPath="/game" text="play again" />
        <ButtonLink redirectPath="/" text="home" />
      </section>
    </>
  );
}

export default GameOverPage;
