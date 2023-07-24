import "./cartitem.scss";

export default function Cartitem({ product }) {
  return (
    <div className="cartitem">
      <img  className="img" src={product.img}/>
      <div className="titlesize">
        <span className="title">{product.title}</span> 
        <span className="size">{product.size}</span>
      </div>
      <span className="price">{product.price}</span>
      <button className="deletebtn">x</button>
    </div>
  );
}
