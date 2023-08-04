import { useState } from "react";
import "./product.scss";
import { CartProduct, Size, addProduct } from "../../redux/cartRedux";
import { Product as ProductP } from "../../data";
import { useAppDispatch } from "../../redux/store";

type productprops = {
  product: ProductP;
};

export default function Product({ product }: productprops) {
  const [showButton, setShowButton] = useState(false);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    const cartProduct: CartProduct = {
      id: product.id,
      title: product.title,
      img: product.img,
      price: product.price,
      size: randomEnumValue(Size),
      qty: 1,
    };
    dispatch(addProduct(cartProduct));
  };

  const randomEnumValue = (enumeration: typeof Size) => {
    const values = Object.keys(Size);
    const random = Math.floor(Math.random() * values.length);
    return enumeration[random];
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
          <button className="addToCardBtn" onClick={() => handleClick()}>
            Add to Cart
          </button>
        ) : (
          <span className="price">{product.price}€</span>
        )}
      </div>
    </div>
  );
}
