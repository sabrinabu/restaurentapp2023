import { useState } from "react";
import "./product.scss";

export default function Product({ product }) {
  const [showButton, setShowButton] = useState(false);

  return (
    <div
      className="product"
      style={{
        backgroundColor: product.id % 2 ? "rgb(248, 246, 244)" : "",
      }}
      onMouseEnter={(e) => {
        setShowButton(true);
      }}
      onMouseLeave={(e) => {
        setShowButton(false);
      }}
    >
      <img className="img" src={product.img} />
      <div className="lowerblock">
        <span className="name">{product.title}</span>
        {showButton ? (
          <button>Add to Cart</button>
        ) : (
          <span className="price">{product.price}€</span>
        )}
      </div>
    </div>
  );
}
