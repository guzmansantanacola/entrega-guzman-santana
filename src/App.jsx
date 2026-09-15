import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Checkout from "./pages/Checkout/Checkout";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";
import Category from "./pages/Category/Category";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="productos/:productId" element={<ProductDetail />} />
      <Route path="categoria/:category" element={<Category />} />
      <Route path="carrito" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
export default App;
