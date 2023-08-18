import Banner from "../../components/banner/Banner";
import Checkout from "../../components/checkout/Checkout";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useAppSelector } from "../../redux/store";
import "./placeorder.scss";

export default function PlaceOrder() {
  const shipping = useAppSelector((state) => state.shipping);
  console.log(shipping);
  const mappingItem = shipping.shippingItems[shipping.shippingItems.length - 1];
  console.log(shipping.shippingItems[shipping.shippingItems.length - 1]);
  const cart = useAppSelector((state) => state.cart);
  return (
    <div>
      <Banner />
      <Navbar />
      <div>
        <Checkout step1 step2 step3></Checkout>

        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>{mappingItem.fullName}</p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> paypal
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
