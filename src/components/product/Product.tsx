import { useState } from "react";
import "./product.scss";
import { CartProduct, Size, addProduct } from "../../redux/cartRedux";
import { Product as ProductP } from "../../data";
import { useAppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";

type productprops = {
  product: ProductP;
  productType: string;
};

export default function Product({ product, productType }: productprops) {
  const [showButton, setShowButton] = useState(false);

  const navigate = useNavigate();
  const handleSingleProduct = () => {
    navigate("/menu/" + productType + "/" + product.id, {
      state: { product },
    });
  };

  // size need to be selectable option later

  const dispatch = useAppDispatch();
  const handleClick = () => {
    const cartProduct: CartProduct = {
      id: product.id,
      title: product.title,
      img: product.img,
      price: product.price,
      size: "M",
      qty: 1,
    };
    dispatch(addProduct(cartProduct));
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
      <img
        className="img"
        onClick={() => handleSingleProduct()}
        src={product.img}
      />
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
