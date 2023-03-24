import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

const CLASS_NAME =
  "bg-gray hover:bg-gray-dark py-2 w-2/3 my-2 text-medium border-2 border-b-4 active:border-b-2  rounded-2xl max-w-xs";

function Button(props: {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className={CLASS_NAME} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

function ButtonLink(props: { text: string; redirectPath: string }) {
  return (
    <Link className={CLASS_NAME} to={props.redirectPath}>
      {props.text}
    </Link>
  );
}

export { ButtonLink, Button };
