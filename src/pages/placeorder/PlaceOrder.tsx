import Banner from "../../components/banner/Banner";
import Checkout from "../../components/checkout/Checkout";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useAppSelector } from "../../redux/store";
import "./placeorder.scss";

export default function PlaceOrder() {
  const shipping = useAppSelector((state) => state.shipping);
  const cart = useAppSelector((state) => state.cart);
  console.log(cart);

  return (
    <div>
      <Banner />
      <Navbar />
      <div>
        <Checkout step1 step2 step3></Checkout>

        <div className="placeorder">
          <div className="left">
          <div className="body">
            <h2>Shipping</h2>
            {shipping.shippingItems.map((item) => (
              <>
                <p>
                  <strong> name:</strong>
                  {item.fullName}
                </p>
                <p>
                  <strong> Address:</strong>
                  {item.address} {item.city} {item.postalCode} {item.country}
                </p>
              </>
            ))}
          </div>
          <div className="secondbody">
            <strong className="payment">Payment</strong>
            <strong className="method">Method: paypal</strong>
          </div>
          <div className="thirdbody">
            <div className="orderitem">
              <strong>Order Items</strong>
              <div className="details">
                {cart.cartItems.map((item) => (
                  <div className="detailsmore">
                    <img className="img" src={item.product.img} />
                    <span className="title">{item.product.title}</span>
                    <span className="all">
                      {item.qty} *
                      {item.product.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
         
          <div className="right">
            <div className="rightdetail">
            <strong>Total:   {cart.total}</strong>
            <strong>shipping:  0 </strong>
            <strong>Tax:  </strong>
            </div>
          

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
