import { faQuestion } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/rat-logo.png";
import Button from "../components/Button";
import { CircleIconButton } from "../components/CircleIconButton";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function HomePage() {
  const [highscore] = useLocalStorage("highscore", 0);

  return (
    <>
      <header>
        <CircleIconButton
          faIcon={faQuestion}
          redirectPath="/how-to"
          className="absolute right-3 top-3"
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
        <Button redirectPath="/game" text="play" />
        <Button redirectPath="/settings" text="settings" />
      </section>

      <section className="my-5">
        <p className="font-bold text-big">{highscore}</p>
        <p className="text-medium">highscore</p>
      </section>
    </>
  );
}
