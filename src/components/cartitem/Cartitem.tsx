import { useDispatch } from "react-redux";
import {
  CartProduct,
  adjustQuantities,
  removeProduct,
} from "../../redux/cartRedux";
import "./cartitem.scss";

type cartItemProps = {
  cartProduct: CartProduct;
};

export default function Cartitem({ cartProduct }: cartItemProps) {
  const dispatch = useDispatch();
  const handleClick = (id: number, qty: number, price: number) => {
    dispatch(removeProduct({ id, qty, price }));
  };

  /*const handleQtyChange = (id: number, operation: string) => {
    if (operation == "plus" && cartProduct.qty < 10)
      dispatch(adjustQuantities({ id, operation }));
    else if (operation === "minus" && cartProduct.qty > 0)
      dispatch(adjustQuantities({ id, operation }));
  };*/

  const handleQtyChange = (id: number, operation: string) => {
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
      <div className="amount">
        <button
          className="changeButton"
          onClick={() => handleQtyChange(cartProduct.id, "minus")}
          disabled={cartProduct.qty <= 0 ? true : false}
        >
          -
        </button>
        <span className="qty">{cartProduct.qty}</span>
        <button
          className="changeButton"
          onClick={() => handleQtyChange(cartProduct.id, "plus")}
          disabled={cartProduct.qty >= 10 ? true : false}
        >
          +
        </button>
      </div>

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
