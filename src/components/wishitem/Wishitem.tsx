import { WishItem, removeWishProduct } from "../../redux/wishlistRedux";
import "./wishitem.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { useAppDispatch } from "../../redux/store";
import { CartItem, addProduct } from "../../redux/cartRedux";
import { useState } from "react";

type wishItemProps = {
  wishItem: WishItem;
};

export default function Wishitem({ wishItem }: wishItemProps) {
  const [size, setSize] = useState<string>("");
  const dispatch = useAppDispatch();
  const handleRemoveClick = (id: string) => {
    console.log("id");
    dispatch(removeWishProduct({ id }));
  };

  const handleAddCart = () => {
    const cartProduct: CartItem = {
      id: "",
      product: wishItem.wishproduct,
      size: size,
      qty: 1,
    };
    dispatch(addProduct(cartProduct));
    dispatch(removeWishProduct({ id: wishItem.id }));
  };

  return (
    <div className="wishitem">
      <img className="img" src={wishItem.wishproduct.img} />
      <span className="title">{wishItem.wishproduct.title}</span>
      <span className="price">{wishItem.wishproduct.price}€</span>
      <button
        className="deleteBtn"
        onClick={() => handleRemoveClick(wishItem.id)}
      >
        <AiOutlineDelete />
      </button>
      <div className="addToCardBlock">
        <select
          className="selectSize"
          onChange={(e) => setSize(e.target.value)}
        >
          <option>S</option>
          <option selected>M</option>
          <option>L</option>
          <option>XL</option>
          <option>XXL</option>
        </select>
        <button className="addCartBtn" onClick={() => handleAddCart()}>
          <MdAddShoppingCart />
        </button>
      </div>
    </div>
  );
}
