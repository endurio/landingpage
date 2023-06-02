import React from "react";
import { FunctionPilotTemplate } from "../icons";

const FunctionPilot = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[57px]">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <p className="font-['Sora'] font-semibold text-5xl text-[#FFFFFF]">
            ASYMPTOTIC POWER CURVES
          </p>
          <p className="font-['Sora'] font-normal text-lg text-[#CAC6DD]">
            No Liquidation. Infinite Liquidity.
          </p>
        </div>
        <FunctionPilotTemplate />
      </div>
    </>
  );
};

export default FunctionPilot;
