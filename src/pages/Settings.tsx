import { faX } from "@fortawesome/free-solid-svg-icons";

import Button from "../components/Button";
import TopRightActionIcon from "../components/TopRightActionIcon";
import { useLocalStorage } from "../hooks/useLocalStorage";

function SettingsPage() {
  const [setHighscore] = useLocalStorage("highscore", 0);

  return (
    <>
      <header>
        <TopRightActionIcon faIcon={faX} redirectPath="/" />
        <h1 className="mt-20 font-bold text-5xl tracking-widest">settings</h1>
      </header>

      <section className="flex flex-col items-center">
        <Button text="reset scores" onClick={() => setHighscore(0)} />
      </section>

      <span>&nbsp;</span>
    </>
  );
}

export default SettingsPage;
