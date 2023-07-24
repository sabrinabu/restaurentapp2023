import { useLocation } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { pastas, pizzas, burgers } from "../../data";
import "./products.scss";

export default function Category() {
  const location = useLocation();
  const producttype = location.pathname.split("/")[2];
  // we will implement it to lazy load later
  const getCategory = (productType) => {
    if (productType === "pastas") return pastas;
    else if (productType === "pizzas") return pizzas;
    else if (productType === "burgers") return burgers;
  };
  const products = getCategory(producttype);

  return (
    <div className="category">
      <Banner />
      <Navbar />
      <div className="wrapper">
        {products?.map((product) => (
          <div
            className="product"
            style={{
              backgroundColor: product.id % 2 ? "rgb(248, 246, 244)" : "",
            }}
          >
            <img className="img" src={product.img} />
            <div className="lowerblock">
              <span className="name">{product.title}</span>
              <span className="price">{product.price}€</span>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
