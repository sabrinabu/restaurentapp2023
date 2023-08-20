import { useState } from "react";
import "./product.scss";
import { CartItem, addProduct } from "../../redux/cartRedux";
import { Product as ProductP } from "../../data";
import { useAppDispatch } from "../../redux/store";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { WishItem, addwishlist } from "../../redux/wishlistRedux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useErrorBoundary } from "react-error-boundary";

type productprops = {
  product: ProductP;
  productType: string;
};

export default function Product({ product, productType }: productprops) {
  const [showButton, setShowButton] = useState<boolean>(false);
  const [wished, setWished] = useState<boolean>(false);
  const { showBoundary } = useErrorBoundary();

  const navigate = useNavigate();
  const handleSingleProduct = () => {
    navigate("/menu/" + productType + "/" + product.id, {
      state: { product },
    });
  };

  // size need to be selectable option later
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const cartProduct: CartItem = {
      id: "",
      product: product,
      size: "M",
      qty: 1,
    };
    try {
      {
        dispatch(addProduct(cartProduct));
        //throw new Error("Error Throughed"); this message will come to the error boundary component
      }
    } catch (error) {
      showBoundary(error);
    }
  };

  const handleAddWishlist = () => {
    const wishlist: WishItem = {
      id: "",
      wishproduct: product,
    };
    try {
      dispatch(addwishlist(wishlist));
      setWished(true);
    } catch (error) {
      showBoundary(error);
    }
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
      <LazyLoadImage
        effect="blur"
        className="img"
        onClick={() => handleSingleProduct()}
        src={product.img}
      />
      <span onClick={handleAddWishlist}>
        {wished ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
      </span>

      <div className="lowerblock">
        <span className="title">{product.title}</span>
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
