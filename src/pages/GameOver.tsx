import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/rat-logo.png";
import ButtonLink from "../components/ButtonLink";
import { useLocalStorage } from "../hooks/useLocalStorage";

function GameOverPage() {
  const { state } = useLocation();
  const { score } = state;

  const [highscore, setHighscore] = useLocalStorage("highscore", 0);

  useEffect(() => {
    if (score > highscore) {
      setHighscore(score);
    }
  }, []);

  return (
    <div>
      <header>
        <img className="my-5 mx-auto w-3/4" src={logo} />
        <h1 className="font-bold text-5xl tracking-widest">Game Over</h1>
      </header>

      <div className="my-10">
        <h2 className="font-semibold mb-1 text-xl">
          {score > highscore ? "highscore" : "score"}
        </h2>
        <span className="font-bold text-5xl">{score}</span>
      </div>

      <section className="flex flex-col items-center">
        <ButtonLink redirectPath="/game" text="play again" />
        <ButtonLink redirectPath="/" text="home" />
      </section>
    </div>
  );
}

export default GameOverPage;
