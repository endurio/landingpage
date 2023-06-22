"use client";
import React from "react";
import { FunctionPlotMobile, FunctionPlotTemplate } from "../icons";
import {
  Expression,
  GraphingCalculator,
  useHelperExpression,
} from "desmos-react";

const FunctionPlot = (props) => {
  return (
    <>
      {props.matches ? (
        <div className="flex flex-col justify-center items-center mt-[57px] pb-[120px]">
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <p className="text-heading text-5xl">ASYMPTOTIC POWER CURVES</p>
            <p className="text-normal text-lg">
              No Liquidation. Infinite Liquidity.
            </p>
          </div>
          {/* <FunctionPlotTemplate /> */}
          <GraphingCalculator
            attributes={{ className: "calculator" }}
            fontSize={18}
            keypad
            projectorMode
            settingsMenu={false}
            expressionsCollapsed={true}
            expressions={false}
            zoomButtons={false}
            lockViewport
            invertedColors
            border={false}
            showGrid={false}
            xAxisNumbers={false}
            yAxisNumbers={false}
          >
            <Expression id="slider" latex="x^2" color="ORANGE"/>
            <Expression id="fn" latex="a=3"/>
            <Point />
          </GraphingCalculator>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-[57px] pb-[120px]">
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <p className="text-heading text-[34px]">ASYMPTOTIC POWER CURVES</p>
            <p className="text-normal text-base">
              No Liquidation. Infinite Liquidity.
            </p>
          </div>
          <FunctionPlotMobile />
        </div>
      )}
    </>
  );
};

const Point = () => {
  const a = useHelperExpression({ latex: "a" });

  let label: string;
  if (a > 0) label = "positive x-axis";
  else if (a < 0) label = "negative x-axis";
  else label = "origin";

  return <Expression id="point" latex="(a,0)" label={label} showLabel />;
};

export default FunctionPlot;
