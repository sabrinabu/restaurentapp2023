import { Link } from "react-router-dom";
import "./navbar.scss";
import { BsTelephone } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <Link to="/" className="lefMenu">
            HOMEPAGE
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
          <div className="rightMenu">LOGIN</div>
          <div className="rightMenu">ORDERS</div>
          <Link to="/cart" className="rightMenu">
            CART(3)
          </Link>
        </div>
      </div>
    </div>
  );
}
