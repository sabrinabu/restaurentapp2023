import { useState } from "react";
import "./product.scss";
import { CartItem, addProduct } from "../../redux/cartRedux";
import { Product as ProductP } from "../../data";
import { useAppDispatch } from "../../redux/store";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { WishItem, addwishlist } from "../../redux/wishlistRedux";

type productprops = {
  product: ProductP;
  productType: string;
};

export default function Product({ product, productType }: productprops) {
  const [showButton, setShowButton] = useState<boolean>(false);
  const [wished, setWished] = useState<boolean>(false);

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
    dispatch(addProduct(cartProduct));
  };

  const handleAddWishlist = () => {
    const wishlist: WishItem = {
      id: "",
      wishproduct: product,
    };
    dispatch(addwishlist(wishlist));
    setWished(true);
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
      <img
        className="img"
        onClick={() => handleSingleProduct()}
        src={product.img}
      />
      <span onClick={handleAddWishlist}>
        {wished ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
      </span>

      <div className="lowerblock">
        <span className="name">{product.title}</span>
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
