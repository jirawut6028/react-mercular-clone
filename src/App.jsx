import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Category from "./components/Category/Category";
import Banner from "./components/Banner/Banner";
import FlashSale from "./components/FlashSale/FlashSale";
import OnlyAtMercular from "./components/OnlyAtMercular/OnlyAtMercular";
import { rippleEffect } from "./utils/helper";
import Article from "./components/Article/Article";
import Merchandise from "./assets/Merchandise.webp";
import ParallaxText from "./components/ParallaxText/ParallaxText";
import FacilityFooter from "./components/Footer/FacilityFooter";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    rippleEffect();
  }, []);

  return (
    <div>
      <Navbar />
      <Category />
      <Banner />
      <FlashSale />
      <OnlyAtMercular />
      <Article />
      <img
        src={Merchandise}
        alt="Merchandise"
        className="mx-auto max-xl:w-[97%] my-6 max-lg:my-3 rounded-xl"
      />
      <ParallaxText />
      <FacilityFooter />
      <Footer />
    </div>
  );
}

export default App;
