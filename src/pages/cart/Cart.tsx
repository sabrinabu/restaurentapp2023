import Banner from "../../components/banner/Banner";
import Cartitem from "../../components/cartitem/Cartitem";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./cart.scss";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  //console.log(cart);

  return (
    <div className="cart">
      <Banner />
      <Navbar />
      <div className="wrapper">
        <div className="parent">
          <div className="center">
            {cart.products.map((product) => (
              <Cartitem product={product} key={product.id} />
            ))}
          </div>
        </div>
        <div className="parent">
          <div className="center"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
