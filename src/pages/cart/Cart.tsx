import Banner from "../../components/banner/Banner";
import Cartitem from "../../components/cartitem/Cartitem";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { reset } from "../../redux/cartRedux";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import "./cart.scss";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shipping");
  };

  const dispatch = useAppDispatch();

  return (
    <div className="cart">
      <Banner />
      <Navbar />
      <div className="wrapper">
        <div className="parent">
          <div className="center">
            {cart.cartItems.map((cardProduct) => (
              <Cartitem cartItem={cardProduct} key={cardProduct.id} />
            ))}
          </div>
          <button className="resetButton" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>
        <div className="parent">
          <div className="center">
            <div className="checkout">
              <div className="row">
                <span className="text">
                  Subtotal ({cart.totalquantity} items)
                </span>
                <span className="text">{cart.total.toFixed(2)}€</span>
              </div>
              <div className="row">
                <span className="text">Service cost</span>
                <span className="text">20€</span>
              </div>
              <div className="row">
                <span className="text">Delivery cost</span>
                <span className="text" style={{ color: "green" }}>
                  Free!
                </span>
              </div>
              <div className="row" style={{ padding: "50px 20px" }}>
                <span className="text" style={{ fontSize: "25px" }}>
                  Total cost
                </span>
                <span className="text" style={{ fontWeight: 600 }}>
                  {cart.total > 0
                    ? (cart.total + 20).toFixed(2)
                    : cart.total.toFixed(2)}
                  €
                </span>
              </div>
              <button className="checkoutbtn" onClick={() => handleClick()}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
