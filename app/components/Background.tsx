import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
// import { GalaxyBackground, EclipBackground, GradientBackgound } from "../icons";

const UniverBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color1: "#ff0000",
          color2: "#00ff00",
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
        {/* <EclipBackground /> */}
      </div>
      {/* <div className="fixed flex justify-center items-center w-full max-h-[800px] galaxy-bg -z-10">
        <GalaxyBackground />
      </div>
      <div className="fixed flex justify-center w-full max-h-[905px] mix-blend-color-dodge blur-[128px] -z-10">
        <GradientBackgound />
      </div> */}
    </>
  );
};

export default UniverBackground;
