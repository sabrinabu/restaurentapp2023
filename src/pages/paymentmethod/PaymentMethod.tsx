import { useState } from "react";
import Banner from "../../components/banner/Banner";
import Checkout from "../../components/checkout/Checkout";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./paymentmethod.scss";
import { useNavigate } from "react-router-dom";

export default function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const navigate = useNavigate();
  
  const submitHandler=()=>{
    navigate("/placeorder");
  }
  return (
    <div className="paymentMethod">
      <Banner />
      <Navbar />
      <div>
        <Checkout step1 step2 />

        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Payment Method</h1>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="paypal"
                value="PayPal"
                name="paymentMethod"
                required
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>
              <label htmlFor="paypal">PayPal</label>
            </div>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="stripe"
                value="Stripe"
                name="paymentMethod"
                required
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>
              <label htmlFor="stripe">Stripe</label>
            </div>
          </div>
          <div>
            <label />
            <button className="primary" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
