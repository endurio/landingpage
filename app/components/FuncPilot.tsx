"use client";
import React, { useState, useEffect } from "react";
import { FunctionPilotMobile, FunctionPilotTemplate } from "../icons";

const FunctionPilot = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      {matches ? (
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
      ) : (
        <div className="flex flex-col justify-center items-center mt-[57px]">
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <p className="font-['Sora'] font-semibold text-[34px] text-[#FFFFFF]">
              ASYMPTOTIC POWER CURVES
            </p>
            <p className="font-['Sora'] font-normal text-base text-[#CAC6DD]">
              Allows the creation of an AMM for leveraged perpetual and future
              derivatives of any index value without the risks of liquidation or
              under-collateralization
            </p>
          </div>
          <FunctionPilotMobile />
        </div>
      )}
    </>
  );
};

export default FunctionPilot;
