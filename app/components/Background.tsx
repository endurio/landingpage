import React from "react";
import { GalaxyBackground, EclipBackground, GradientBackgound } from "../icons";

const UniverBackground = () => {
  return (
    <>
      <div className="fixed flex justify-center items-center w-full max-h-[1248px] -z-10">
        <EclipBackground />
      </div>
      <div className="fixed flex justify-center items-center w-full max-h-[800px] galaxy-bg -z-10">
        <GalaxyBackground />
      </div>
      <div className="fixed flex justify-center w-full max-h-[905px] mix-blend-color-dodge blur-[128px] -z-10">
        <GradientBackgound />
      </div>
    </>
  );
};

export default UniverBackground;
