import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchUser } from "./redux/userRedux.ts";
import { useAppDispatch } from "./redux/store.ts";
import { Product } from "./pages/product/Product.tsx";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/home/Home.tsx"));
const Menus = lazy(() => import("./pages/menus/Menus.tsx"));
const Category = lazy(() => import("./pages/products/Products"));
const Cart = lazy(() => import("./pages/cart/Cart.tsx"));
const Orders = lazy(() => import("./pages/orders/Orders.tsx"));
const Wishlist = lazy(() => import("./pages/wishlist/Wishlist.tsx"));
const Contact = lazy(() => import("./pages/contact/Contact.tsx"));

function App() {
  const dispatch = useAppDispatch();
  dispatch(fetchUser());

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/menu"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Menus />
              </Suspense>
            }
          />
          <Route
            path="/menu/:category"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Category />
              </Suspense>
            }
          />
          <Route
            path="/menu/:category/:id"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Product />
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="/orders"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Orders />
              </Suspense>
            }
          />
          <Route
            path="/wishlist"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Wishlist />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<div>loading...</div>}>
                <Contact />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
