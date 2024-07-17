import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSoundContext } from "../hooks/useSoundContext";

export function CircleIconButton(props: {
  faIcon: IconProp;
  redirectPath?: string;
  onClick?: () => void;
  invert?: boolean;
  className?: string;
  dataCy?: string;
}) {
  const { soundEffectRef, soundEffectEnabled } = useSoundContext();

  const COLOR_CLASSES = props.invert
    ? "border-yellow text-yellow active:bg-yellow lg:hover:bg-yellow active:text-black lg:hover:text-black"
    : "border-black active:bg-black lg:hover:bg-black active:text-yellow lg:hover:text-yellow";

  const handleButtonClick = () => {
    if (soundEffectEnabled) {
      soundEffectRef.current.play();
    }

    props.onClick?.();
  };

  if (props.redirectPath) {
    return (
      <Link
        to={props.redirectPath}
        className={`rounded-full h-14 w-14 border-4 flex items-center justify-center ${COLOR_CLASSES} ${props.className}`}
        onClick={handleButtonClick}
        data-cy={props.dataCy}
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
        className={`rounded-full h-14 w-14 border-4 flex items-center justify-center ${COLOR_CLASSES} ${props.className}`}
      >
        <span className="text-[2rem] flex justify-center">
          <FontAwesomeIcon icon={props.faIcon} />
        </span>
      </button>
    );
  }
}
