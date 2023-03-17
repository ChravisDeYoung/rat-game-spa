import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import Button from "../components/Button";
import TopRightActionIcon from "../components/TopRightActionIcon";
import { useLocalStorage } from "../hooks/useLocalStorage";

function SettingsPage() {
  const [highscore, setHighscore] = useLocalStorage("highscore", 0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <TopRightActionIcon faIcon={faX} redirectPath="/" />
        <h1 className="mt-20 font-bold text-5xl tracking-widest">settings</h1>
      </header>

      <section className="flex flex-col items-center">
        <Button text="reset scores" onClick={() => setIsOpen(true)} />
      </section>

      <span>&nbsp;</span>

      {isOpen && (
        <section className="bg-black h-screen w-screen z-0 absolute top-0">
          <button
            className="absolute right-3 top-3 rounded-full h-14 w-14 border-4 border-yellow hover:bg-yellow text-yellow hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-[2rem]">
              <FontAwesomeIcon icon={faX} />
            </span>
          </button>

          <h1 className="mt-20 font-bold text-5xl tracking-widest text-yellow">
            are you sure you want to reset?
          </h1>

          <div className="my-10 text-yellow">
            <h2 className="font-semibold mb-1 text-xl">current highscore</h2>
            <span className="font-bold text-5xl">{highscore}</span>
          </div>

          <Button
            text="reset"
            onClick={() => {
              setHighscore(0);
              setIsOpen(false);
            }}
          />
        </section>
      )}
    </>
  );
}

export default SettingsPage;
