import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSoundContext } from "../hooks/useSoundContext";

export default function TopRightIconButton(props: {
  faIcon: IconProp;
  redirectPath?: string;
  onClick?: () => void;
  invert?: boolean;
}) {
  const { soundEffectRef, soundEffectEnabled } = useSoundContext();

  const COLOR_CLASSES = props.invert
    ? "border-yellow hover:bg-yellow text-yellow hover:text-black"
    : "border-black hover:bg-black hover:text-yellow";

  const handleButtonClick = async () => {
    if (soundEffectEnabled) {
      soundEffectRef.current.play();
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
