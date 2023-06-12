import React, { useState, useEffect, useRef } from "react";
import CELLS from "vanta/dist/vanta.cells.min";
import * as THREE from "three";
import { ScrollSVG } from "../icons";
const UniverBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CELLS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 3.0,
          scaleMobile: 3.0,
          color1: "#2c0c30",
          color2: "#0c1857",
        })
      );
    }
    // return () => {
    //   if (vantaEffect) vantaEffect.destroy();
    // };
  }, [vantaEffect]);
  return (
    <>
      <div
        ref={vantaRef}
        className="fixed flex justify-center items-center w-full h-full -z-10"
      >
        <div className="absolute bottom-[30px] items-center gap-4 max-w-[46px]">
          <ScrollSVG />
        </div>
      </div>
    </>
  );
};

export default UniverBackground;
