import { MouseEventHandler } from "react";

function Button(props: {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className="bg-gray hover:bg-black hover:text-gray font-medium py-2 w-1/2 my-2 text-xl"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
