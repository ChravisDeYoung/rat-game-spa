import { Link } from "react-router-dom";

function ButtonLink(props: { text: string; redirectPath: string }) {
  return (
    <Link
      className="bg-gray hover:bg-black hover:text-gray font-medium py-2 w-1/2 my-2 text-xl"
      to={props.redirectPath}
    >
      {props.text}
    </Link>
  );
}

export default ButtonLink;
