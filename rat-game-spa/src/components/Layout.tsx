import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import soundEffect from "../assets/button-click.mp3";
import musicSource from "../assets/soundtrack.mp3";

function Layout() {
  const musicRef = useRef(new Audio(musicSource));
  const soundEffectRef = useRef(new Audio(soundEffect));
  const [soundEffectEnabled, setSoundEffectEnabled] = useState(true);

  return (
    <div className="flex flex-col justify-between h-full text-center max-w-screen-sm mx-auto">
      <Outlet
        context={{
          musicRef,
          soundEffectRef,
          soundEffectEnabled,
          setSoundEffectEnabled,
        }}
      />
    </div>
  );
}

export default Layout;
