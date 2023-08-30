import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Menus from "./pages/menus/Menus.tsx";
import Category from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";
import { fetchUser } from "./redux/userRedux.ts";
import { useAppDispatch } from "./redux/store.ts";
import { Product } from "./pages/product/Product.tsx";
import Wishlist from "./pages/wishlist/Wishlist.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Shipping from "./pages/shipping/Shipping.tsx";
import PaymentMethod from "./pages/paymentmethod/PaymentMethod.tsx";
import PlaceOrder from "./pages/placeorder/PlaceOrder.tsx";


function App() {
  const dispatch = useAppDispatch();
  dispatch(fetchUser());

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menus />} />
          <Route path="/menu/:category" element={<Category />} />
          <Route path="/menu/:category/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<PaymentMethod />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
