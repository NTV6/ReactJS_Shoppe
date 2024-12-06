import { useEffect } from "react";
import WOW from 'wowjs'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    const wow = new WOW.WOW({
      animateClass: 'animate__animated',
      live: false, // Tắt tự động kiểm tra DOM để cải thiện hiệu suất
    });
    wow.init();
  }, []);

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
