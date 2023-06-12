import React, { useState, useEffect, useRef, useCallback } from "react";
import CELLS from "vanta/dist/vanta.cells.min";
import * as THREE from "three";
const UniverBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const vantaRef = useRef(null);

  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    setScrollY(scrollY);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    // return () => {
    //   window.removeEventListener("scroll", onScroll, { passive: true });
    // };
  }, []);

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
          scale: 1.0,
          zoom: 1,
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
      ></div>
    </>
  );
};

export default UniverBackground;
