import "./product.scss";
import { useLocation } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Product as ProductP } from "../../data";

import { CartProduct, Size, addProduct } from "../../redux/cartRedux";
import { useAppDispatch } from "../../redux/store";
import { useState } from "react";
import { IncreaseDecrease } from "../../components/increasedecrease/IncreaseDecrease";

export const Product = () => {
  const location = useLocation();
  const product: ProductP = location.state.product;
  const [sizeItem, setSizeItem] = useState<string>();
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();

  const handleAddProduct = () => {
    const cartProduct: CartProduct = {
      id: product.id,
      img: product.img,
      price: product.price,
      title: product.title,
      qty: quantity,
      size: sizeItem,
    };
    dispatch(addProduct(cartProduct));
  };

  const handleSizeChange = (size: Size) => {
    setSizeItem(Size[size]);
  };

  const adjustQuantity = (id: number, operation: string) => {
    if (operation === "plus") setQuantity(quantity + 1);
    if (operation === "minus") setQuantity(quantity - 1);
  };

  return (
    <div className="productPage">
      <Banner />
      <Navbar />
      <div className="wrapper">
        <img className="img" src={product.img}></img>
        <div className="textBlock">
          <span className="headline">{product.title}</span>
          <span className="description">{product.desc}</span>
          <span className="price">{product.price}€</span>
          <div className="sizeButtons">
            <button
              className="sizeBtn"
              onClick={() => handleSizeChange(Size.S)}
            >
              Small
            </button>
            <button
              className="sizeBtn"
              onClick={() => handleSizeChange(Size.M)}
            >
              Medium
            </button>
            <button
              className="sizeBtn"
              onClick={() => handleSizeChange(Size.L)}
            >
              Large
            </button>
          </div>
          <div className="quantityAddToCart">
            <span className="quantity">Quantity</span>
            <IncreaseDecrease
              id={product.id}
              quantity={quantity}
              onButtonClick={adjustQuantity}
            />
            <button className="addToCart" onClick={() => handleAddProduct()}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
