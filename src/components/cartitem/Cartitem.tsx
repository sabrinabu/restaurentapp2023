import { useDispatch } from "react-redux";
import { removeProduct, reset } from "../../redux/cartRedux";
import "./cartitem.scss";

export default function Cartitem({ product }) {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(removeProduct({ id }));
  };

  return (
    <div className="cartitem">
      <img className="img" src={product.img} />
      <div className="titlesize">
        <span className="title">{product.title}</span>
        <span className="size">{product.size}</span>
      </div>
      <span className="price">{product.price}€</span>
      <span className="qty">{product.qty}</span>
      <button className="deletebtn" onClick={() => handleClick(product.id)}>
        x
      </button>
    </div>
  );
}
