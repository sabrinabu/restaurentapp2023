import { Link } from "react-router-dom";
import "./navbar.scss";
import { BsTelephone } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector } from "../../redux/store";
import { useState } from "react";

export default function Navbar() {
  const cart = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.user.user);
  const wishlist = useAppSelector((state) => state.wish);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [stickyHeader, setStickyHeader] = useState<boolean>(false);

  const setFixedHeader = () => {
    if (window.scrollY >= 100 && window.innerWidth > 750) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  };
  window.addEventListener("scroll", setFixedHeader);

  return (
    <div className={stickyHeader ? "navbar stickyHeader" : "navbar"}>
      <div className="container">
        <Link to="/" className="menuItem">
          HOME
        </Link>
        <Link className="menuItem" to="/menu">
          MENU
        </Link>
        <Link to="/" className="menuItem">
          CONTACT
        </Link>
        <span
          className="menuItem"
          style={{ fontSize: "25px", fontWeight: "600" }}
        >
          RESTAURENT
        </span>
        <span
          className="menuItem"
          style={{
            padding: "10px",
            borderRadius: "5%",
            backgroundColor: "rgb(231, 212, 180)",
          }}
        >
          <BsTelephone color="grey" />
          <span style={{ fontSize: "20px" }}>030-178456</span>
        </span>
        <span className="menuItem">
          {isAuthenticated ? (
            <span
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Hi {user?.nickname}, Logout?
            </span>
          ) : (
            <span onClick={() => loginWithRedirect()}>LOGIN</span>
          )}
        </span>
        {user.role == "admin" && (
          <Link to="/orders" className="menuItem">
            ORDERS
          </Link>
        )}
        {cart.cartItems?.length > 0 && (
          <Link to="/cart" className="menuItem">
            CART({cart.cartItems?.length})
          </Link>
        )}

        {wishlist.wishItems?.length > 0 && (
          <Link to="/wishlist" className="menuItem">
            WISH({wishlist.wishItems?.length})
          </Link>
        )}
      </div>
    </div>
  );
}
