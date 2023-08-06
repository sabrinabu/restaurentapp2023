import "./cartitem.scss";
import { useDispatch } from "react-redux";
import {
  CartProduct,
  adjustQuantities,
  removeProduct,
} from "../../redux/cartRedux";
import { IncreaseDecrease } from "../increasedecrease/IncreaseDecrease";

type cartItemProps = {
  cartProduct: CartProduct;
};

export default function Cartitem({ cartProduct }: cartItemProps) {
  const dispatch = useDispatch();
  const handleClick = (id: number, qty: number, price: number) => {
    dispatch(removeProduct({ id, qty, price }));
  };

  const handleQuantityChange = (id: number, operation: string) => {
    dispatch(adjustQuantities({ id, operation }));
  };

  return (
    <div className="cartitem">
      <img className="img" src={cartProduct.img} />
      <div className="titlesize">
        <span className="title">{cartProduct.title}</span>
        <span className="size">{cartProduct.size}</span>
      </div>
      <span className="price">{cartProduct.price}€</span>
      <IncreaseDecrease
        id={cartProduct.id}
        quantity={cartProduct.qty}
        onButtonClick={handleQuantityChange}
      />
      <button
        className="deletebtn"
        onClick={() =>
          handleClick(cartProduct.id, cartProduct.qty, cartProduct.price)
        }
      >
        x
      </button>
    </div>
  );
}
