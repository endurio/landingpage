import React from "react";
import {
  CardBorder,
  Efficient,
  Transparency,
  HighResistance,
  ZeroTradingFee,
  RealYield,
  NoLiquidition,
  InfiniteLiquidity,
  ArrowIcon,
} from "../icons";
import config from "../config/index.json";

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
              <div key={idx} className="relative max-w-[276px] h-[336px]">
                <CardBorder />
                <div className="absolute flex flex-col justify-between h-full items-start p-6 gap-6 top-0">
                  <div className="flex flex-col gap-6">
                    {checkIcon(item.icon)}
                    <div className="flex flex-col items-start gap-4">
                      <span className="font-['Sora'] font-semibold text-xl text-[#FFFFFF]">
                        {item.title}
                      </span>
                      <span className="font-['Sora'] font-normal text-sm text-[#CAC6DD]">
                        {item.content}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2 cursor-pointer">
                    <span className="font-['Sora'] font-semibold text-sm text-[#CAC6DD]">
                      READ MORE
                    </span>
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Innovation;
