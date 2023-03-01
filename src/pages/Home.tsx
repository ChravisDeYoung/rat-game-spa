import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import logo from "../assets/rat-logo.png";

function HomePage() {
  const [highscore, setHighscore] = useLocalStorage("highscore", 0);

  return (
    <>
      <Link
        to="/how-to"
        className="absolute right-3 top-3 rounded-full h-14 w-14 border-black border-4"
      >
        <h1 className="font-bold text-[2rem]">?</h1>
      </Link>
      <div>
        <img className="my-5 mx-auto w-3/4" src={logo} />
        <h1 className="font-bold text-5xl tracking-widest">R A T</h1>
        <h2 className="font-semibold my-1 text-xl">the game</h2>
      </div>
      <div className="flex flex-col items-center">
        <Link
          className="bg-gray font-medium py-2 w-1/2 my-2 text-xl"
          to="/game"
        >
          play
        </Link>
        <Link
          className="bg-gray font-medium py-2 w-1/2 my-2 text-xl"
          to="/settings"
        >
          settings
        </Link>
      </div>
      <div className="my-5">
        <p className="font-bold text-5xl">{highscore}</p>
        <p className="font-semibold my-1 text-xl">highscore</p>
      </div>
    </>
  );
}

export default HomePage;
