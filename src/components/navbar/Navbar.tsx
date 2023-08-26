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
import { useDispatch } from "react-redux";
import { setLanaguageselection } from "../../redux/utilityRedux";

export default function Navbar() {
  const cart = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.user.user);
  const wishlist = useAppSelector((state) => state.wish);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { isSticky } = useStickyPart(200, 750);
  const [hideMenu, setHideMenu] = useState(true);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const dispatch = useDispatch();

  const handleLanguageSelect = (selectedLanguage: string) => {
    if (selectedLanguage == "en") {
      i18n.changeLanguage("en-US");
      dispatch(setLanaguageselection(selectedLanguage));
      setLanguage(selectedLanguage);
    } else if (selectedLanguage == "de") {
      i18n.changeLanguage("de-DE");
      dispatch(setLanaguageselection(selectedLanguage));
      setLanguage(selectedLanguage);
    } else if (selectedLanguage == "bd") {
      i18n.changeLanguage("bd-BD");
      dispatch(setLanaguageselection(selectedLanguage));
      setLanguage(selectedLanguage);
    }
  };

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
        <span className="selectLanguage">
          <select
            value={language}
            onChange={(e) => handleLanguageSelect(e.target.value)}
          >
            <option value="en">en</option>
            <option value="de">de</option>
            <option value="bd">bd</option>
          </select>
        </span>
        <Link to="/" className="menuItem">
          {t("home")}
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
