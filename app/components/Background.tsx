import React, { useState, useEffect, useRef } from "react";
import CELLS from "vanta/dist/vanta.cells.min";
import * as THREE from "three";

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
          color1: "#37103D",
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
      </div>
    </>
  );
};

export default UniverBackground;
