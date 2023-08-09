import "./product.scss";
import { useLocation } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { Product as ProductP } from "../../data";

import { CartItem, Size, addProduct } from "../../redux/cartRedux";
import { useAppDispatch } from "../../redux/store";
import { useState } from "react";
import { IncreaseDecrease } from "../../components/increasedecrease/IncreaseDecrease";

export const Product = () => {
  const location = useLocation();
  const product: ProductP = location.state.product;
  const [sizeItem, setSizeItem] = useState<string>(Size[Size.L]);
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();

  const handleAddProduct = () => {
    const cartProduct: CartItem = {
      id: "",
      product: product,
      qty: quantity,
      size: sizeItem,
    };
    dispatch(addProduct(cartProduct));
  };

  const handleSizeChange = (size: Size) => {
    setSizeItem(Size[size]);
  };
  const adjustQuantity = (operation: string) => {
    if (operation === "plus") setQuantity(quantity + 1);
    if (operation === "minus") setQuantity(quantity - 1);
  };

  return (
    <div className="productPage">
      <Banner />
      <Navbar />
      <div className="wrapper">
        <div className="imgBlock">
          <img className="img" src={product.img}></img>
        </div>

        <div className="textBlock">
          <span className="headline">{product.title}</span>
          <span className="description">{product.desc}</span>
          <span className="price">{product.price}€</span>
          <div className="sizeButtons">
            <button
              className={sizeItem === "S" ? "sizeBtnRed" : "sizeBtn"}
              onClick={() => handleSizeChange(Size.S)}
            >
              Small
            </button>
            <button
              className={sizeItem === "M" ? "sizeBtnRed" : "sizeBtn"}
              onClick={() => handleSizeChange(Size.M)}
            >
              Medium
            </button>
            <button
              className={sizeItem === "L" ? "sizeBtnRed" : "sizeBtn"}
              onClick={() => handleSizeChange(Size.L)}
            >
              Large
            </button>
          </div>
          <div className="quantityAddToCart">
            <span className="quantity">Quantity</span>
            <IncreaseDecrease
              cartItemId={""}
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
