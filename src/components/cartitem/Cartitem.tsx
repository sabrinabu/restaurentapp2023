import "./cartitem.scss";
import { useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { BsSave } from "react-icons/bs";
import {
  CartItem,
  adjustQuantities,
  removeProduct,
} from "../../redux/cartRedux";
import { IncreaseDecrease } from "../increasedecrease/IncreaseDecrease";
import { useNavigate } from "react-router-dom";

type cartItemProps = {
  cartItem: CartItem;
};

export default function Cartitem({ cartItem }: cartItemProps) {
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
  
  const navigate = useNavigate();
  const handleSingleProduct = () => {
    navigate(
      "/menu/" + cartItem.product.productType + "/" + cartItem.product.id,
      {
        state: { product: cartItem.product },
      }
    );
  };

  return (
    <div className="cartitem">
      <img
        className="img"
        onClick={handleSingleProduct}
        src={cartItem.product.img}
      />

      <div className="titlesize">
        <span className="title">{cartItem.product.title}</span>
        <span className="size">{cartItem.size}</span>
      </div>
      <span className="price">{cartItem.product.price}€</span>
      <IncreaseDecrease
        cartItemId={cartItem.id}
        quantity={cartItem.qty}
        onButtonClick={handleQuantityChange}
      />
      <button
        className="deletebtn"
        onClick={() =>
          handleRemoveClick(cartItem.id, cartItem.qty, cartItem.product.price)
        }
      >
        <AiOutlineDelete />
      </button>
      <button className="deletebtn">
        <BsSave />
      </button>
    </div>
  );
}
