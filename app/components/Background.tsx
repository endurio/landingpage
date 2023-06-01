import React from "react";
import { GalaxyBackground, EclipBackground, GradientBackgound } from "../icons";

const UniverBackground = () => {
  return (
    <>
      <div className="absolute flex justify-center items-center w-full max-h-[1248px]">
        <EclipBackground />
      </div>
      <div className="absolute flex justify-center items-center w-full max-h-[800px] galaxy-bg">
        <GalaxyBackground />
      </div>
      <div className="absolute flex justify-center w-full max-h-[905px] mix-blend-color-dodge blur-[128px]">
        <GradientBackgound />
      </div>
    </>
  );
};

export default UniverBackground;
