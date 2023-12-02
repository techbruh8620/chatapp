import React from "react";
import MainNav from "../components/MainNav";
import Herosection from "../components/Herosection";
import ProductLists from "../components/Product/ProductList";
import Footer from "../components/Footer";

const HomePage = () => {
  return <>
  <header>
        <MainNav />
      </header>
      <main>
        <Herosection />
        <ProductLists />
      </main>
      <footer>
        <Footer />
      </footer>
  </>;
};

export default HomePage;
