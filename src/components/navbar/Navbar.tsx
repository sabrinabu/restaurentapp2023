import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <div className="leftone">HOMEPAGE</div>
          <div className="lefttwo">MENU</div>
          <div className="leftthree">CONTACT</div>
        </div>
        <div className="middle">MASSIMO</div>
        <div className="right">
          <div className="rightone">123 456 78</div>
          <div className="righttwo">LOGIN</div>
          <div className="rightthree">ORDERS</div>
          <div className="rightfour">CART(3)</div>
        </div>
      </div>
    </div>
  );
}
