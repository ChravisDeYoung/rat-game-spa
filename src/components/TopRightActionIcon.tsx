import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function TopRightActionIcon(props: { faIcon: IconProp; redirectPath: string }) {
  return (
    <Link
      to={props.redirectPath}
      className="absolute right-3 top-3 rounded-full h-14 w-14 border-black hover:bg-black hover:text-yellow border-4"
    >
      <span className="text-[2rem]">
        <FontAwesomeIcon icon={props.faIcon} />
      </span>
    </Link>
  );
}

export default TopRightActionIcon;
