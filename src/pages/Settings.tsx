import { faMusic, faVolumeHigh, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "../components/Button";
import TopRightIconButton from "../components/TopRightIconButton";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useSoundContext } from "../hooks/useSoundContext";

export default function SettingsPage() {
  const { musicRef, soundEffectEnabled, setSoundEffectEnabled } =
    useSoundContext();
  const [musicEnabled, setMusicEnabled] = useState(!musicRef.current.paused);
  const [highscore, setHighscore] = useLocalStorage("highscore", 0);
  const [isOpen, setIsOpen] = useState(false);

  const resetHighscore = () => {
    setHighscore(0);
    setIsOpen(false);
  };

  const toggleMusic = () => {
    if (musicRef.current.paused) {
      musicRef.current.play();
    } else {
      musicRef.current.pause();
    }

    setMusicEnabled(!musicRef.current.paused);
  };

  return (
    <>
      {/* Settings Page */}
      <header>
        <TopRightIconButton faIcon={faX} redirectPath="/" />
        <h1 className="mt-20 font-bold text-big tracking-widest">settings</h1>
      </header>

      <section className="flex flex-col items-center">
        <div className="flex justify-between w-2/3 max-w-xs">
          <button
            className={`rounded-2xl border-2 border-b-4 w-[49%] py-3 ${
              musicEnabled ? "bg-gray" : "bg-black"
            }`}
            onClick={toggleMusic}
          >
            <FontAwesomeIcon
              icon={faMusic}
              size="xl"
              className={`${!musicEnabled && "text-yellow"}`}
            />
          </button>

          <button
            className={`rounded-2xl border-2 border-b-4 w-[49%] py-2 ${
              soundEffectEnabled ? "bg-gray" : "bg-black"
            }`}
            onClick={() => setSoundEffectEnabled(!soundEffectEnabled)}
          >
            <FontAwesomeIcon
              icon={faVolumeHigh}
              size="xl"
              className={`${!soundEffectEnabled && "text-yellow"}`}
            />
          </button>
        </div>
        <Button text="reset scores" onClick={() => setIsOpen(true)} />
      </section>

      <span>&nbsp;</span>

      {/* Reset Confirmation Page */}
      <section
        className={`bg-black h-screen w-screen z-0 absolute transition-[top] duration-[500ms] top-0 left-0 ${
          !isOpen && "top-[-100vh]"
        }`}
      >
        <div className="max-w-screen-sm mx-auto h-screen flex flex-col justify-between ">
          <TopRightIconButton
            faIcon={faX}
            invert={true}
            onClick={() => setIsOpen(false)}
          />

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

          <Button
            text="confirm"
            className="bg-yellow hover:bg-yellow-dark mb-10 mx-auto"
            onClick={resetHighscore}
          ></Button>
        </div>
      </section>
    </>
  );
}
