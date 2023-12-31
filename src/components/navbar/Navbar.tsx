import { Link } from "react-router-dom";
import "./navbar.scss";
import { BsTelephone } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { MdCancelPresentation } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppSelector } from "../../redux/store";
import useStickyPart from "../../hooks/useStickyPart";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const cart = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.user.user);
  const wishlist = useAppSelector((state) => state.wish);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { isSticky } = useStickyPart(200, 750);
  const [hideMenu, setHideMenu] = useState(true);
  const { t } = useTranslation();

  return (
    <div className={isSticky ? "navbar stickyHeader" : "navbar"}>
      <span className="menuHideIcon">
        {hideMenu ? (
          <BiMenu
            onClick={() => {
              setHideMenu(false);
            }}
          />
        ) : (
          <MdCancelPresentation
            onClick={() => {
              setHideMenu(true);
            }}
          />
        )}
      </span>
      <div className={hideMenu ? "container" : "containerSmallDevice"}>
        <Link to="/" className="menuItem">
          {t("home")}
        </Link>
        <Link className="menuItem" to="/menu">
          {t("menu")}
        </Link>
        <Link className="menuItem" to="/contact">
          {t("contact")}
        </Link>
        <span className="menuTitle">{t("restaurent")}</span>
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
              {t("loggedin_first")} {user?.nickname}, {t("loggedin_last")}?
            </span>
          ) : (
            <span onClick={() => loginWithRedirect()}>{t("login")}</span>
          )}
        </span>
        {user.role == "admin" && (
          <Link to="/orders" className="menuItem">
            {t("orders")}
          </Link>
        )}
        {cart.cartItems?.length > 0 && (
          <Link to="/cart" className="menuItem">
            {t("cart")}({cart.cartItems?.length})
          </Link>
        )}
        {wishlist.wishItems?.length > 0 && (
          <Link to="/wishlist" className="menuItem">
            {t("wish")}({wishlist.wishItems?.length})
          </Link>
        )}
      </div>
    </div>
  );
}
