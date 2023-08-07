import { Link } from "react-router-dom";
import "./navbar.scss";
import { BsTelephone } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector } from "../../redux/store";
import { useState } from "react";

export default function Navbar() {
  const cart = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.userR.user);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [stickyHeader, setStickyHeader] = useState<boolean>(false);

  const setFixedHeader = () => {
    if (window.scrollY >= 100) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  };
  window.addEventListener("scroll", setFixedHeader);

  return (
    <div className={stickyHeader ? "navbar stickyHeader" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link to="/" className="lefMenu">
            HOME
          </Link>
          <Link className="lefMenu" to="/menu">
            MENU
          </Link>
          <Link to="/" className="lefMenu">
            CONTACT
          </Link>
        </div>
        <div className="middle">RESTAURENT</div>
        <div className="right">
          <div className="rightone">
            <BsTelephone size={17} color="grey" />
            <span>178 456 78</span>
          </div>
          <div className="rightMenu">
            {isAuthenticated ? (
              <div
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Hi {user?.nickname}, Logout?
              </div>
            ) : (
              <div onClick={() => loginWithRedirect()}>LOGIN</div>
            )}
          </div>
          {user.role == "admin" && (
            <Link to="/orders" className="rightMenu">
              ORDERS
            </Link>
          )}
          {cart.cartItems?.length > 0 && (
            <Link to="/cart" className="rightMenu">
              CART({cart.cartItems?.length})
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
