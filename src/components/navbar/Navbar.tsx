import { Link } from "react-router-dom";
import "./navbar.scss";
import { BsTelephone } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const cart = useSelector((state) => state.cart);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <div className="navbar">
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
        <div className="middle">MASSIMO</div>
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
                Hello {user?.name}, LOGOUT?
              </div>
            ) : (
              <div onClick={() => loginWithRedirect()}>LOGIN</div>
            )}
          </div>
          <Link to="/orders" className="rightMenu">
            ORDERS
          </Link>

          <Link to="/cart" className="rightMenu">
            CART({cart.products.length})
          </Link>
        </div>
      </div>
    </div>
  );
}
