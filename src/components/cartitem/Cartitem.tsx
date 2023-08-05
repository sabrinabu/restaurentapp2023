import { useDispatch } from "react-redux";
import { CartProduct, removeProduct } from "../../redux/cartRedux";
import "./cartitem.scss";

type cartItemProps = {
  cartProduct: CartProduct;
};

export default function Cartitem({ cartProduct }: cartItemProps) {
  const dispatch = useDispatch();
  const handleClick = (id: number, qty: number, price: number) => {
    dispatch(removeProduct({ id, qty, price }));
  };

  return (
    <div className="cartitem">
      <img className="img" src={cartProduct.img} />
      <div className="titlesize">
        <span className="title">{cartProduct.title}</span>
        <span className="size">{cartProduct.size}</span>
      </div>
      <span className="price">{cartProduct.price}€</span>
      <span className="qty">{cartProduct.qty}</span>
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
