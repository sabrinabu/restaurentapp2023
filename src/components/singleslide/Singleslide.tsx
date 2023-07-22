import "./singleslide.scss";

export default function Singleslide({ item }) {
  return (
    <div className="singleslide">
      <img src={item.img} className="img" />
      <span className="title">{item.title}</span>
      <div className="deccription">{item.desc}</div>
      <span className="price">{item.price}€</span>
      <button className="button">Add to cart</button>
    </div>
  );
}
