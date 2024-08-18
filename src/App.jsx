import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Category from "./components/Category/Category";
import Banner from "./components/Banner/Banner";
import FlashSale from "./components/FlashSale/FlashSale";
import OnlyAtMercular from "./components/OnlyAtMercular/OnlyAtMercular";

function App() {
  return (
    <div>
      <Navbar />
      <Category />
      <Banner />
      <FlashSale />
      <OnlyAtMercular />
    </div>
  );
}

export default App;
