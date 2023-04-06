import { faX, faMusic, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import Button from "../components/Button";
import TopRightIconButton from "../components/TopRightIconButton";
import { useMusic } from "../components/Layout";
import { useLocalStorage } from "../hooks/useLocalStorage";

function SettingsPage() {
  const { music, soundEffectsEnabled, setSoundEffectsEnabled } = useMusic();
  const [highscore, setHighscore] = useLocalStorage("highscore", 0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(!music.paused);

  const toggleMusic = () => {
    if (isMusicPlaying) {
      music.pause();
    } else {
      music.play();
    }
    setIsMusicPlaying(!music.paused);
  };

  return (
    <>
      <header>
        <TopRightIconButton faIcon={faX} redirectPath="/" />
        <h1 className="mt-20 font-bold text-big tracking-widest">settings</h1>
      </header>

      <section className="flex flex-col items-center">
        <div className="flex justify-between w-2/3 max-w-xs">
          <button
            onClick={toggleMusic}
            className={`rounded-2xl border-2 border-b-4 w-[49%] py-3 ${
              isMusicPlaying ? "bg-gray" : "bg-black"
            }`}
          >
            <FontAwesomeIcon
              icon={faMusic}
              size="xl"
              className={`${!isMusicPlaying && "text-yellow"}`}
            />
          </button>

          <button
            onClick={() => setSoundEffectsEnabled(!soundEffectsEnabled)}
            className={`rounded-2xl border-2 border-b-4 w-[49%] py-2 ${
              soundEffectsEnabled ? "bg-gray" : "bg-black"
            }`}
          >
            <FontAwesomeIcon
              icon={faVolumeHigh}
              size="xl"
              className={`${!soundEffectsEnabled && "text-yellow"}`}
            />
          </button>
        </div>
        <Button text="reset scores" onClick={() => setIsOpen(true)} />
      </section>

      <span>&nbsp;</span>

      <section
        className={`bg-black h-screen w-screen z-0 absolute transition-[top] duration-[500ms] top-0 left-0 ${
          !isOpen && "top-[-100vh]"
        }`}
      >
        <div className="max-w-screen-sm mx-auto h-screen flex flex-col justify-between ">
          <button
            className="absolute right-3 top-3 rounded-full h-14 w-14 border-4 border-yellow hover:bg-yellow text-yellow hover:text-black"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-[2rem]">
              <FontAwesomeIcon icon={faX} />
            </span>
          </button>

          <div>
            <h1 className="mt-20 font-bold text-big tracking-widest text-yellow px-5">
              are you sure you want to reset?
            </h1>
            <p className="text-small text-yellow">
              this action cannot be undone
            </p>
          </div>

          <div className="my-10 text-yellow">
            <h2 className="font-bold mb-1 text-medium">current highscore</h2>
            <span className="font-bold text-big">{highscore}</span>
          </div>

          <button
            className="bg-yellow hover:bg-yellow-dark py-2 w-2/3 mb-10 text-medium rounded-2xl max-w-xs mx-auto"
            onClick={() => {
              setHighscore(0);
              setIsOpen(false);
            }}
          >
            confirm
          </button>
        </div>
      </section>
    </>
  );
}

export default SettingsPage;
