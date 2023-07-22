import "./offerproduct.scss";

export default function Offerproduct() {
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
          <span className="watch">00:00:00:00</span>
          <button className="btn">Order Now</button>
        </div>
        <img className="rightsidepic" src="/offerProduct.png" />
      </div>
    </div>
  );
}
