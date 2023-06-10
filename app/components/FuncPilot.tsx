"use client";
import React, { useState, useEffect } from "react";
import { FunctionPilotMobile, FunctionPilotTemplate } from "../icons";
import useMediaQuery from "./hooks/useMedia";

const FunctionPilot = () => {
  const matches = useMediaQuery(768);

  return (
    <>
      {matches ? (
        <div className="flex flex-col justify-center items-center mt-[57px] pb-[120px]">
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <p className="text-heading text-5xl">ASYMPTOTIC POWER CURVES</p>
            <p className="text-normal text-lg">
              No Liquidation. Infinite Liquidity.
            </p>
          </div>
          <FunctionPilotTemplate />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-[57px] pb-[120px]">
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <p className="text-heading text-[34px]">ASYMPTOTIC POWER CURVES</p>
            <p className="text-normal text-base">
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
