import { Link } from "react-router-dom";
import { useSoundContext } from "../hooks/useSoundContext";

export default function Button(props: {
  redirectPath?: string;
  text: string;
  className?: string;
  onClick?: () => void;
}) {
  const { soundEffectRef, soundEffectEnabled } = useSoundContext();

  const handleButtonClick = () => {
    if (soundEffectEnabled) {
      soundEffectRef.current.play();
    }

    props.onClick?.();
  };

  // Link Button
  if (props.redirectPath) {
    return (
      <Link
        className={`bg-gray hover:bg-gray-dark py-2 w-2/3 my-2 text-medium border-2 border-b-4 active:border-b-2 rounded-2xl max-w-xs ${props.className}`}
        to={props.redirectPath}
        onClick={handleButtonClick}
      >
        {props.text}
      </Link>
    );
  } else {
    return (
      <button
        className={`bg-gray hover:bg-gray-dark py-2 w-2/3 my-2 text-medium border-2 border-b-4 active:border-b-2 rounded-2xl max-w-xs ${props.className}`}
        onClick={handleButtonClick}
      >
        {props.text}
      </button>
    );
  }
}
