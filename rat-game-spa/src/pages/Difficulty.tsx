import { faLock, faX } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/rat-logo.png";
import { Button } from "../components/Button";
import { CircleIconButton } from "../components/CircleIconButton";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Highscore } from "../types/Highscore";
import { GameDifficulty } from "../types/GameDifficulty";
import { useNavigate } from "react-router-dom";

export default function DifficultyPage() {
  const navigate = useNavigate();
  
  // const [highscore] = useLocalStorage("highscore", 0);
  const [highscores, setHighscores] = useState<Highscore[]>([]);

  const userId = 1;
  useEffect(() => {
    fetch(`http://localhost:5104/${userId}/highscores`)
      .then(response => response.json())
      .then((data: Highscore[]) => setHighscores(data))
  }, [])

  const handleDifficultySelect = (difficulty: GameDifficulty) => 
    navigate('/game', { state: { difficulty: difficulty }})

  const easyHighscore = highscores.find(h => h.difficulty === GameDifficulty.Easy)?.score ?? 0;
  const mediumHighscore = highscores.find(h => h.difficulty === GameDifficulty.Medium)?.score ?? 0;
  const hardHighscore = highscores.find(h => h.difficulty === GameDifficulty.Hard)?.score ?? 0;
  
  return (
    <>
      <header>
      <CircleIconButton
        faIcon={faX}
        redirectPath="/"
        className="absolute right-3 top-3"
        dataCy="home-link"
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
          onClick={() => handleDifficultySelect(GameDifficulty.Easy)}
          className="bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
        >
          <span className="w-3/4 inline-block">easy</span>
          <span className="w-1/4 inline-block border-l-2">
            {easyHighscore}
          </span>
        </Button>
        <Button
          onClick={() => handleDifficultySelect(GameDifficulty.Medium)}
          className="bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
        >
          <span className="w-3/4 inline-block">medium</span>
          <span className="w-1/4 inline-block border-l-2">
            {easyHighscore < 25 ? <FontAwesomeIcon icon={faLock} /> : mediumHighscore}
          </span>
          </Button>
        <Button
          onClick={() => handleDifficultySelect(GameDifficulty.Hard)}
          className="bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
        >
          <span className="w-3/4 inline-block">hard</span>
          <span className="w-1/4 inline-block border-l-2">
            {easyHighscore < 50 && mediumHighscore < 50 ? <FontAwesomeIcon icon={faLock} /> : hardHighscore}
          </span>
          </Button>
      </section>

      <section className="my-5">
        {" "}
      </section>
    </>
  );
}
