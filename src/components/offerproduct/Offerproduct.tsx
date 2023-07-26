import useTimer from "../../hooks/useTimer";
import "./offerproduct.scss";

export default function Offerproduct() {
  const { days, hours, minutes, seconds } = useTimer(
    "2023-08-25T22:30:00.000Z"
  );
  return (
    <div className="offerproduct">
      <img className="backgroundpic" src="/offerBg.png" />
      <div className="wrapper">
        <div className="textblock">
          <span className="title">Delicious Burger & French Fry</span>
          <span className="desc">
            Progressively simply effective e-toilers and process-centric methods
            of empowerment. Quickly ponficate parallel.
          </span>
          <span className="watch">
            {days +
              ":" +
              ("0" + hours).slice(-2) +
              ":" +
              ("0" + minutes).slice(-2) +
              ":" +
              ("0" + seconds).slice(-2)}
          </span>
          <button className="btn">Order Now</button>
        </div>
        <img className="rightsidepic" src="/offerProduct.png" />
      </div>
    </div>
  );
}
