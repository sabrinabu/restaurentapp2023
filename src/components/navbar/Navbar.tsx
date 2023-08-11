import { Link } from "react-router-dom";
import "./navbar.scss";
import { BsTelephone } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector } from "../../redux/store";
import useStickyPart from "../../hooks/useStickyPart";

export default function Navbar() {
  const cart = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.user.user);
  const wishlist = useAppSelector((state) => state.wish);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { isSticky } = useStickyPart(200, 750);

  return (
    <div className={isSticky ? "navbar stickyHeader" : "navbar"}>
      <div className="container">
        <Link to="/" className="menuItem">
          HOME
        </Link>
        <Link className="menuItem" to="/menu">
          MENU
        </Link>
        <Link to="/contact" className="menuItem">
          CONTACT
        </Link>
        <span className="menuTitle">RESTAURENT</span>
        <span className="menuPhone">
          <BsTelephone color="grey" />
          <span>030-178456</span>
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
