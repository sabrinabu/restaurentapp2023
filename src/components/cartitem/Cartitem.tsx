import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/cartRedux";
import "./cartitem.scss";

export type Product = {
  product: {
    id: number;
    img: string;
    title: string;
    size: string;
    price: number;
    qty: number;
  };
};

export default function Cartitem({ product }: Product) {
  const dispatch = useDispatch();
  const handleClick = (id: number) => {
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
