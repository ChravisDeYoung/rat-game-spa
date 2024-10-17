import { faLock, faX } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/rat-logo.png";
import { Button } from "../components/Button";
import { CircleIconButton } from "../components/CircleIconButton";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DifficultyPage() {
  const [highscore] = useLocalStorage("highscore", 0);

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
          redirectPath="/game?difficulty=easy"
          className="bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
        >
          <span className="w-3/4 inline-block">easy</span><span className="w-1/4 inline-block border-l-2">27</span>
        </Button>
        <Button
          redirectPath="/game?difficulty=medium"
          className="bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
        >
          <span className="w-3/4 inline-block">medium</span><span className="w-1/4 inline-block border-l-2">14</span>
          </Button>
        <Button
          redirectPath="/game?difficulty=hard"
          className="bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
        >
          <span className="w-3/4 inline-block">hard</span><span className="w-1/4 inline-block border-l-2"><FontAwesomeIcon icon={faLock} /></span>
          </Button>
      </section>

      <section className="my-5">
        {" "}
      </section>
    </>
  );
}
