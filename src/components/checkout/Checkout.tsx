import "./checkout.scss";
import { useAppSelector } from "../../redux/store";

export const Checkout = () => {
  const handleCheckout = () => {
    alert(
      "Checkout will be implemented soon, until then you can get everything for free. Happy?"
    );
  };
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="checkout">
      <div className="row">
        <span className="text">Subtotal ({cart.totalquantity} items)</span>
        <span className="text">{cart.total.toFixed(2)}€</span>
      </div>
      <div className="row">
        <span className="text">Service cost</span>
        <span className="text">0€</span>
      </div>
      <div className="row">
        <span className="text">Delivery cost</span>
        <span className="text" style={{ color: "green" }}>
          {cart.total > 50 ? "Free!" : "5€"}
        </span>
      </div>
      <div className="row" style={{ padding: "50px 20px" }}>
        <span>Total cost</span>
        <span className="text" style={{ fontWeight: 600 }}>
          {cart.total > 0.1
            ? cart.total < 50 && cart.total !== 0
              ? (cart.total + 5).toFixed(2)
              : cart.total.toFixed(2)
            : 0}
          €
        </span>
      </div>
      <button className="checkoutbtn" onClick={() => handleCheckout()}>
        Checkout
      </button>
    </div>
  );
};
