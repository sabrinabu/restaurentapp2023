import { Link } from "react-router-dom";
import "./singlemenu.scss";
import { Menu } from "../../data";
import ErrorBoundary from "../errorboundary/ErrorBoundary";

type singleMenu = {
  data: Menu;
};

export default function Singlemenu({ data }: singleMenu) {
  const getRoutingLink = () => {
    return "/menu/" + data.slug;
  };

  return (
    <div className="singlemenu">
      <img className="img" src={data.img} />
      <div className="textDiv">
        <span
          className={data.title === "Juicy Burgers" ? "titleblack" : "title"}
        >
          {data.title}
        </span>

        <span className={data.title === "Juicy Burgers" ? "descblack" : "desc"}>
          {data.desc}
        </span>
        <Link to={getRoutingLink()}>
          <button
            className={
              data.title === "Juicy Burgers" ? "buttonblack" : "button"
            }
          >
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
}
