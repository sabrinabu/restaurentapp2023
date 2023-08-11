import Banner from "../../components/banner/Banner";
import Cartitem from "../../components/cartitem/Cartitem";
import { Checkout } from "../../components/checkout/Checkout";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useAppSelector } from "../../redux/store";
import "./cart.scss";

export default function Cart() {
  const cart = useAppSelector((state) => state.cart);

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
        </div>
        <div className="parent">
          <div className="center">
            <Checkout />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
