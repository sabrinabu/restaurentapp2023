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
          <div className="center">
            <div className="checkout">
              <div className="row">
                <span className="text">
                  Subtotal ({cart.totalquantity} items)
                </span>
                <span className="text">{cart.total}€</span>
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
                  {cart.total + 20}€
                </span>
              </div>
              <button className="checkoutbtn">Checkout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
