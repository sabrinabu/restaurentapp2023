import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Category from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";
import { Login } from "./pages/login/Login";
import { fetchUser } from "./redux/userRedux.ts";
import { useAppDispatch } from "./redux/reduxHook.ts";

function App() {
  const dispatch = useAppDispatch();
  dispatch(fetchUser());

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
