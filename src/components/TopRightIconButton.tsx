import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { Link } from "react-router-dom";

import soundEffect from "../assets/button-click.mp3";
import { useMusic } from "./Layout";

export default function TopRightIconButton(props: {
  faIcon: IconProp;
  redirectPath?: string;
  onClick?: () => void;
  invert?: boolean;
}) {
  const { soundEffectsEnabled } = useMusic();
  const soundEffects = useRef<HTMLAudioElement>(new Audio(soundEffect));

  const COLOR_CLASSES = props.invert
    ? "border-yellow hover:bg-yellow text-yellow hover:text-black"
    : "border-black hover:bg-black hover:text-yellow";

  const handleButtonClick = async () => {
    if (soundEffectsEnabled) {
      await soundEffects.current.play();
    }

    props.onClick?.();
  };

  if (props.redirectPath) {
    return (
      <Link
        to={props.redirectPath}
        className={`absolute right-3 top-3 rounded-full h-14 w-14 border-4 flex items-center justify-center ${COLOR_CLASSES}`}
        onClick={handleButtonClick}
      >
        <span className="text-[2rem] flex justify-center">
          <FontAwesomeIcon icon={props.faIcon} />
        </span>
      </Link>
    );
  } else {
    return (
      <button
        onClick={handleButtonClick}
        className={`absolute right-3 top-3 rounded-full h-14 w-14 border-4 flex items-center justify-center ${COLOR_CLASSES}`}
      >
        <span className="text-[2rem] flex justify-center">
          <FontAwesomeIcon icon={props.faIcon} />
        </span>
      </button>
    );
  }
}
