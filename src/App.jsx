import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Category from "./components/Category/Category";
import Banner from "./components/Banner/Banner";
import FlashSale from "./components/FlashSale/FlashSale";
import OnlyAtMercular from "./components/OnlyAtMercular/OnlyAtMercular";

function App() {
  useEffect(() => {
    const btnRipple = document.querySelectorAll(".btn-ripple");
    btnRipple.forEach((btn) => {
      btn.onmousedown = ({ pageX, pageY, currentTarget }) => {
        let x =
          ((pageX - currentTarget.offsetLeft) * 100) /
          currentTarget.offsetWidth;
        let y =
          ((pageY - currentTarget.offsetTop) * 100) /
          currentTarget.offsetHeight;
        const ripple = document.createElement("span");
        const rippleColor = "#d0d5d9";
        ripple.classList.add("ripple-effect");
        ripple.style.background = rippleColor;
        btn.appendChild(ripple);
        ripple.style.left = x + "%";
        ripple.style.top = y + "%";
        setTimeout(() => {
          ripple.remove();
        }, 700);
      };

      btn.onmousemove = ({ pageX, pageY, currentTarget }) => {
        let x = pageX - currentTarget.offsetLeft;
        let y = pageY - currentTarget.offsetTop;

        btn.style.setProperty("--x", x + "px");
        btn.style.setProperty("--y", y + "px");
      };
    });

    const btnRippleM = document.querySelectorAll(".btn-ripple-m");
    btnRippleM.forEach((btn) => {
      btn.onmousedown = () => {
        const ripple = document.createElement("span");
        const rippleColor = "#b7d0f8";
        ripple.classList.add("ripple-effect-m");
        ripple.style.background = rippleColor;
        btn.appendChild(ripple);
        setTimeout(() => {
          ripple.remove();
        }, 700);
      };
    });
  }, []);

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
