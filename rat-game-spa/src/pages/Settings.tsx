import { faMusic, faVolumeHigh, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { CircleIconButton } from "../components/CircleIconButton";
// import { useLocalStorage } from "../hooks/useLocalStorage";
import { useSoundContext } from "../hooks/useSoundContext";
import { Highscore } from "../types/Highscore";

export default function SettingsPage() {
  const { musicRef, soundEffectEnabled, setSoundEffectEnabled } =
    useSoundContext();
  const [musicEnabled, setMusicEnabled] = useState(!musicRef.current.paused);
  // const [highscore, setHighscore] = useLocalStorage("highscore", 0);
  const [highscore, setHighscore] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  const userId = 1;
  useEffect(() => {
    fetch(`http://localhost:5104/${userId}/highscore`)
      .then((response) => response.json())
      .then((data: Highscore) => setHighscore(data?.score ?? 0));
  }, []);

  const resetHighscore = () => {
    const userId = 1;
    fetch(`http://localhost:5104/${userId}/highscores`, {
      method: "DELETE",
      // headers: {
      //   'Content-Type': 'application/json',
      // },
    });

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
        <CircleIconButton
          faIcon={faX}
          redirectPath="/"
          className="absolute right-3 top-3"
          dataCy="home-link"
        />
        <h1 className="mt-20 font-bold text-big tracking-widest">settings</h1>
      </header>

      <section className="flex flex-col items-center">
        <div className="flex justify-between w-2/3 max-w-xs">
          <Button
            className={`w-[49%] ${
              musicEnabled
                ? "bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
                : "bg-black"
            }`}
            onClick={toggleMusic}
          >
            <FontAwesomeIcon
              icon={faMusic}
              size="lg"
              className={`${musicEnabled ? "" : "text-yellow"}`}
            />
          </Button>

          <Button
            className={`w-[49%] ${
              soundEffectEnabled
                ? "bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
                : "bg-black"
            }`}
            onClick={() => setSoundEffectEnabled(!soundEffectEnabled)}
          >
            <FontAwesomeIcon
              icon={faVolumeHigh}
              size="lg"
              className={`${soundEffectEnabled ? "" : "text-yellow"}`}
            />
          </Button>
        </div>
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gray active:bg-gray-dark lg:hover:bg-gray-dark"
          dataCy="reset-btn"
        >
          reset scores
        </Button>
      </section>

      <span>&nbsp;</span>

      {/* Reset Confirmation Page */}
      <section
        className={`bg-black h-full w-screen z-0 absolute transition-[top] duration-[500ms] top-0 left-0 ${
          !isOpen && "top-[-100vh]"
        }`}
      >
        <div className="max-w-screen-sm mx-auto h-full flex flex-col justify-between ">
          <CircleIconButton
            faIcon={faX}
            invert={true}
            onClick={() => setIsOpen(false)}
            className="absolute right-3 top-3"
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
            <span className="font-bold text-big" data-cy="reset-highscore">
              {highscore}
            </span>
          </div>

          <Button
            className="bg-yellow active:bg-yellow-dark lg:hover:bg-yellow-dark mb-10 mx-auto"
            onClick={resetHighscore}
            dataCy="confirm-reset-btn"
          >
            confirm
          </Button>
        </div>
      </section>
    </>
  );
}
