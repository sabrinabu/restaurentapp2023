import "./product.scss";
import { useLocation } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Product as ProductP } from "../../data";

export const Product = () => {
  const location = useLocation();
  const product: ProductP = location.state.product;
  console.log(product);

  return (
    <div className="productPage">
      <Banner />
      <Navbar />
      <img className="img" src={product.img}></img>
      <div className="textBlock">
        <span className="headline">{product.title}</span>
        <span className="description">{product.desc}</span>
        <span className="price">{product.price}€</span>
        <div className="sizeButtons">
          <button className="sizeBtn">Small</button>
          <button className="sizeBtn">Medium</button>
          <button className="sizeBtn">Large</button>
        </div>
        <div className="quantityAddToCart">
          <span className="quantity">Quantity</span>

          <button className="addToCart">ADD TO CART</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
