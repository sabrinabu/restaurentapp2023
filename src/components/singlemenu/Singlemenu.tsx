import "./singlemenu.scss";

export default function Singlemenu({ data }) {
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
        <button
          className={data.title === "Juicy Burgers" ? "buttonblack" : "button"}
        >
          Explore
        </button>
      </div>
    </div>
  );
}
