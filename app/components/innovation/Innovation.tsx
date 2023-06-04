import React from "react";
import {
  CardBorder,
  CardBorderHover,
  Efficient,
  Transparency,
  HighResistance,
  ZeroTradingFee,
  RealYield,
  NoLiquidition,
  InfiniteLiquidity,
  ArrowIcon,
} from "../../icons";
import InnovationCard from "./components/InnovationCard";
import config from "../../config/index.json";

const checkIcon = (icon) => {
  switch (icon) {
    case "Efficient":
      return <Efficient />;
    case "Transparency":
      return <Transparency />;
    case "HighResistance":
      return <HighResistance />;
    case "ZeroTradingFee":
      return <ZeroTradingFee />;
    case "RealYield":
      return <RealYield />;
    case "NoLiquidation":
      return <NoLiquidition />;
    case "InfiniteLiquidity":
      return <InfiniteLiquidity />;
    default:
      return <Efficient />;
  }
};

const Innovation = () => {
  const { innovation } = config;

  return (
    <>
      <div
        id="innovation"
        className="flex flex-col items-center py-[120px] gap-[56px]"
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="font-['Sora'] font-semibold text-5xl text-[#FFFFFF]">
            OUR INNOVATIONS
          </p>
          <p className="font-['Sora'] font-normal text-lg text-[#CAC6DD] text-center">
            Uniswap solves the spot DEX problems. <br /> Derivable solves the
            perpetual futures DEX problems
          </p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-row justify-center max-w-[1200px] flex-wrap items-start gap-8">
            {innovation.map((item, idx) => (
              <InnovationCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Innovation;
