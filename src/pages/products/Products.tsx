import { useLocation } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Products } from "../../data";
import "./products.scss";
import Product from "../../components/product/Product";
import { useEffect, useState } from "react";

export default function Category() {
  const location = useLocation();
  const producttype = location.pathname.split("/")[2];
  const [products, setProducts] = useState<Products>();

  /*const getCategory = (productType: string) => {
    if (productType === "pastas") {
      import("../../data").then((module) => {
        setProducts(module.pastas);
        console.log("pastas loaded");
      });
    } else if (productType === "pizzas") {
      import("../../data").then((module) => {
        setProducts(module.pizzas);
        console.log("pizzas loaded");
      });
    } else if (productType === "burgers") {
      import("../../data").then((module) => {
        setProducts(module.burgers);
        console.log("burgers loaded");
      });
    }
  };*/

  // Async lazy loading
  const getCategory = async (productType: string) => {
    if (productType === "pastas") {
      const pastas = (await import("../../data")).pastas;
      setProducts(pastas);
    } else if (productType === "pizzas") {
      const pizzas = (await import("../../data")).pizzas;
      setProducts(pizzas);
    } else if (productType === "burgers") {
      const burgers = (await import("../../data")).burgers;
      setProducts(burgers);
    }
  };

  useEffect(() => {
    getCategory(producttype);
  }, [producttype]);

  return (
    <div className="category">
      <Banner />
      <Navbar />
      <div className="wrapper">
        {products?.map((product) => (
          <Product
            product={product}
            productType={producttype}
            key={product.id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
