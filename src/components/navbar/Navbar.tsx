import { Link } from "react-router-dom";
import "./navbar.scss";
import { BsTelephone } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector } from "../../redux/store";

export default function Navbar() {
  const cart = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.userR.user);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

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
                Hi {user?.nickname}, LOGOUT?
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
          {cart.products.length > 0 && (
            <Link to="/cart" className="rightMenu">
              CART({cart.products.length})
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
