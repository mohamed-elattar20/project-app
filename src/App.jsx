import { useEffect } from "react";
import Card from "./Components/Card";
import Carousel from "./Components/CarouselComp/Carousel";
import Header from "./Components/HeaderComp/Header";
import NavBar from "./Components/NavBar";
import Sec3 from "./Components/Sec3Com/Sec3";
import ProductsShow from "./Components/ProductsShow";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./Redux/Slices/ProductsSlice";
import Sec4 from "./Components/Sec4Comp/Sec4";
import Carousel2 from "./Components/Carousel2Comp/Carousel2";
import Form from "./Components/Form";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import LoginPage from "./Pages/LoginPage";
import ProductDescPage from "./Components/ProductDescPage";
import Cart from "./Components/Cart";

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  // const { products } = useSelector(state => state.products)  
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        {/* <Route path="/:id" element={<ProductDescPage />} /> */}
        <Route path="products/:id/:quantity" element={<ProductDescPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="cart" element={<Cart />} />
      </Routes>

    </>
  );
}

export default App;
