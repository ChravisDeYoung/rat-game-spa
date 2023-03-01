import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

function SettingsPage() {
  const [highscore, setHighscore] = useLocalStorage("highscore", 0);

  return (
    <>
      <Link
        to="/"
        className="absolute right-3 top-3 rounded-full h-14 w-14 border-black border-4"
      >
        <h1 className="font-bold text-[2rem]">X</h1>
      </Link>

      <div className="mt-20">
        <h1 className="font-bold text-5xl tracking-widest">settings</h1>
      </div>

      <div className="flex flex-col items-center">
        <button
          className="bg-gray font-medium py-2 w-1/2 my-2 text-xl"
          onClick={() => setHighscore(0)}
        >
          reset scores
        </button>
      </div>
      <p>&nbsp;</p>
    </>
  );
}

export default SettingsPage;
