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
import { WishItem, addwishlist } from "../../redux/wishlistRedux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useErrorBoundary } from "react-error-boundary";

type cartItemProps = {
  cartItem: CartItem;
};

export default function Cartitem({ cartItem }: cartItemProps) {
  const dispatch = useDispatch();
  const { showBoundary } = useErrorBoundary();

  const handleRemoveClick = (
    cartItemId: string,
    qty: number,
    price: number
  ) => {
    try {
      dispatch(removeProduct({ cartItemId, qty, price }));
    } catch (error) {
      showBoundary(error);
    }
  };

  const handleQuantityChange = (operation: string, cartItemId: string) => {
    try {
      dispatch(adjustQuantities({ operation, cartItemId }));
    } catch (error) {
      showBoundary(error);
    }
  };

  const handleAddWishBtn = () => {
    const wishItem: WishItem = {
      id: "",
      wishproduct: cartItem.product,
    };
    try {
      dispatch(addwishlist(wishItem));
      dispatch(
        removeProduct({
          cartItemId: cartItem.id,
          qty: cartItem.qty,
          price: cartItem.product.price,
        })
      );
    } catch (error) {
      showBoundary(error);
    }
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
      <LazyLoadImage
        effect="blur"
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
      <button className="deletebtn" onClick={handleAddWishBtn}>
        <BsSave />
      </button>
    </div>
  );
}
