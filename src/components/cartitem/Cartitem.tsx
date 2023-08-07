import "./cartitem.scss";
import { useDispatch } from "react-redux";
import {
  CartItem,
  adjustQuantities,
  removeProduct,
} from "../../redux/cartRedux";
import { IncreaseDecrease } from "../increasedecrease/IncreaseDecrease";
import { Link } from "react-router-dom";

type cartItemProps = {
  cartItem: CartItem;
};

export default function Cartitem({ cartItem: cartProduct }: cartItemProps) {
  const dispatch = useDispatch();

  const handleRemoveClick = (
    cartItemId: string,
    qty: number,
    price: number
  ) => {
    dispatch(removeProduct({ cartItemId, qty, price }));
  };

  const handleQuantityChange = (operation: string, cartItemId: string) => {
    dispatch(adjustQuantities({ operation, cartItemId }));
  };

  return (
    <div className="cartitem">
      <Link to="/menu">
      <img className="img" src={cartProduct.product.img} />
      </Link>
   
      <div className="titlesize">
        <span className="title">{cartProduct.product.title}</span>
        <span className="size">{cartProduct.size}</span>
      </div>
      <span className="price">{cartProduct.product.price}€</span>
      <IncreaseDecrease
        cartItemId={cartProduct.id}
        quantity={cartProduct.qty}
        onButtonClick={handleQuantityChange}
      />
      <button
        className="deletebtn"
        onClick={() =>
          handleRemoveClick(
            cartProduct.id,
            cartProduct.qty,
            cartProduct.product.price
          )
        }
      >
        x
      </button>
    </div>
  );
}
