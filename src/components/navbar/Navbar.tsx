import { Link } from "react-router-dom";
import "./navbar.scss";
import { BsTelephone } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <div className="leftone">HOMEPAGE</div>

          <Link className="lefttwo" to="/menu">
            MENU
          </Link>

          <div className="leftthree">CONTACT</div>
        </div>
        <div className="middle">MASSIMO</div>
        <div className="right">
          <div className="rightone">
            <BsTelephone size={17} color="grey" />
            <span>178 456 78</span>
          </div>
          <div className="righttwo">LOGIN</div>
          <div className="rightthree">ORDERS</div>
          <div className="rightfour">CART(3)</div>
        </div>
      </div>
    </div>
  );
}
