import { faQuestion } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/rat-logo.png";
import ButtonLink from "../components/ButtonLink";
import TopRightActionIcon from "../components/TopRightActionIcon";
import { useLocalStorage } from "../hooks/useLocalStorage";

function HomePage() {
  const [highscore] = useLocalStorage("highscore", 0);

  return (
    <>
      <header>
        <TopRightActionIcon faIcon={faQuestion} redirectPath="/how-to" />
        <img className="my-5 mx-auto w-3/4" src={logo} />
        <h1 className="font-bold text-5xl tracking-widest">R A T</h1>
        <h2 className="font-semibold my-1 text-xl">the game</h2>
      </header>

      <section className="flex flex-col items-center">
        <ButtonLink redirectPath="/game" text="play" />
        <ButtonLink redirectPath="/settings" text="settings" />
      </section>

      <section className="my-5">
        <p className="font-bold text-5xl">{highscore}</p>
        <p className="font-semibold my-1 text-xl">highscore</p>
      </section>
    </>
  );
}

export default HomePage;
