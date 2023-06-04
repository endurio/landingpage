"use client";

import React, { useState } from "react";
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
} from "../../../icons";

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

const InnovationCard = (item: any) => {
  const [over, setOver] = useState(false);

  return (
    <div
      className="relative max-w-[276px] h-[336px]"
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
    >
      {over ? <CardBorderHover /> : <CardBorder />}
      <div className="absolute flex flex-col justify-between h-full items-start p-6 gap-6 top-0">
        <div className="flex flex-col gap-6">
          {checkIcon(item.item.icon)}
          <div className="flex flex-col items-start gap-4">
            <span className="font-['Sora'] font-semibold text-xl text-[#FFFFFF]">
              {item.item.title}
            </span>
            <span className="font-['Sora'] font-normal text-sm text-[#CAC6DD]">
              {item.item.content}
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
  );
};

export default InnovationCard;
