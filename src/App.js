import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Herosection from "./components/Herosection";
import ProductLists from "./components/Product/ProductList";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <header>
        <MainNav />
      </header>
      <main>
        <Herosection />
        <ProductLists />
        <Routes>
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
