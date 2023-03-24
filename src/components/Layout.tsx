import { useEffect, useRef, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import soundtrack from "../assets/soundtrack.mp3";

type ContextType = {
  music: HTMLAudioElement;
  soundEffectsEnabled: boolean;
  setSoundEffectsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

function Layout() {
  const [music] = useState<HTMLAudioElement>(new Audio(soundtrack));
  const [soundEffectsEnabled, setSoundEffectsEnabled] = useState<boolean>(true);

  useEffect(() => {
    music.volume = 0.05;
    music.loop = true;
    // music.play().catch(() => {
    //   document.addEventListener("click", () => music.play(), {
    //     once: true,
    //   });
    // });
  }, []);

  return (
    <div className="flex flex-col justify-between h-screen text-center max-w-screen-sm mx-auto">
      <Outlet
        context={{ music, soundEffectsEnabled, setSoundEffectsEnabled }}
      />
    </div>
  );
}

export default Layout;

export function useMusic() {
  return useOutletContext<ContextType>();
}
