import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WOW from 'wowjs'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pay from "./pages/Pay";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotPound";

function App() {

  useEffect(() => {
    const wow = new WOW.WOW({
      animateClass: 'animate__animated',
      live: false, // Tắt tự động kiểm tra DOM để cải thiện hiệu suất
    });
    wow.init();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/productdetail">ProductDetail</Link>
          <Link to="/pay">Pay</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
