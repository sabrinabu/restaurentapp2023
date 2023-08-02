import { useState } from "react";
import "./product.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
import { Product as ProductP } from "../../data";

type productprops = {
  product: ProductP;
};

export default function Product({ product }: productprops) {
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      addProduct({
        id: product.id,
        title: product.title,
        img: product.img,
        price: product.price,
        size: "S",
        qty: 1,
      })
    );
  };

  return (
    <div
      className="product"
      style={{
        backgroundColor: product.id % 2 ? "rgb(248, 246, 244)" : "",
      }}
      onMouseEnter={() => {
        setShowButton(true);
      }}
      onMouseLeave={() => {
        setShowButton(false);
      }}
    >
      <img className="img" src={product.img} />
      <div className="lowerblock">
        <span className="name">{product.title}</span>
        {showButton ? (
          <button onClick={() => handleClick()}>Add to Cart</button>
        ) : (
          <span className="price">{product.price}€</span>
        )}
      </div>
    </div>
  );
}
