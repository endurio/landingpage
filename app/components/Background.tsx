import React, { useState, useEffect, useRef, useCallback } from "react";
import CELLS from "vanta/dist/vanta.cells.min";
import * as THREE from "three";
import { ScrollSVG } from "../icons";

function shouldShowScroll() {
  return (
    typeof window !== "undefined" &&
    window.innerHeight <= 1024 &&
    window.scrollY <= 150
  );
}

const UniverBackground = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [showScroll, setShowScroll] = useState(shouldShowScroll());

  const vantaRef = useRef(null);

  const onScroll = useCallback((event) => {
    setShowScroll(shouldShowScroll());
  }, []);

  useEffect(() => {
    //add eventlistener to window
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
    }
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

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
          backgroundColor: "#0c1857",
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
        className={`fixed flex justify-center items-center w-full h-full -z-10`}
      >
        {showScroll && props.url !== "#about" && (
          <div className="absolute flex flex-col justify-center items-center gap-4 w-full bottom-4">
            <ScrollSVG />
          </div>
        )}
      </div>
    </>
  );
};

export default UniverBackground;
