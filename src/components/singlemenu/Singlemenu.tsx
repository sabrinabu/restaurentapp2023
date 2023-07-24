import { Link } from "react-router-dom";
import "./singlemenu.scss";

export default function Singlemenu({ data }) {
  const getRoutingLink = () => {
    return "/menu/" + data.slug;
  };
  console.log(data);
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
