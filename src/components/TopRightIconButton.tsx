import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler, useRef } from "react";
import { Link } from "react-router-dom";

import soundEffect from "../assets/button-click.mp3";
import { useMusic } from "./Layout";

export default function TopRightIconButton(props: {
  faIcon: IconProp;
  redirectPath?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  const { soundEffectsEnabled } = useMusic();
  const soundEffects = useRef<HTMLAudioElement>(new Audio(soundEffect));

  const handleButtonClick = async () => {
    if (soundEffectsEnabled) {
      await soundEffects.current.play();
    }

    props.onClick;
  };

  if (props.redirectPath) {
    return (
      <Link
        to={props.redirectPath}
        className="absolute right-3 top-3 rounded-full h-14 w-14 border-black hover:bg-black hover:text-yellow border-4 flex items-center justify-center"
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
        className="absolute right-3 top-3 rounded-full h-14 w-14 border-black hover:bg-black hover:text-yellow border-4 flex items-center justify-center"
      >
        <span className="text-[2rem] flex justify-center">
          <FontAwesomeIcon icon={props.faIcon} />
        </span>
      </button>
    );
  }
}

// function IconButton(props: {
//   faIcon: IconProp;
//   onClick: MouseEventHandler<HTMLButtonElement>;
// }) {
//   return (
//     <button
//       onClick={props.onClick}
//       className="absolute right-3 top-3 rounded-full h-14 w-14 border-black hover:bg-black hover:text-yellow border-4"
//     >
//       <span className="text-[2rem]">
//         <FontAwesomeIcon icon={props.faIcon} />
//       </span>
//     </button>
//   );
// }
