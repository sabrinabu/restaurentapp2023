import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Menus from "./pages/menus/Menus.tsx";
import Category from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";
import { fetchUser } from "./redux/userRedux.ts";
import { useAppDispatch } from "./redux/store.ts";

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
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
