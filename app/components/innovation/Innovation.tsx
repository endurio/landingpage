"use client";
import React, { useState, useEffect } from "react";
import InnovationCard from "./components/InnovationCard";
import config from "../../config/index.json";
import { Carousel } from "@trendyol-js/react-carousel";
import EllipseSlider from "./components/EllipseSlider";
import useMediaQuery from "../hooks/useMedia";

const Innovation = () => {
  const { innovation } = config;
  const [page, setPage] = useState(0);
  const matches = useMediaQuery(768);

  const pageIndicater = () => {
    if (page >= 0 && page < 4) {
      setPage((prevState) => ++prevState);
    } else setPage(0);
  };

  return (
    <>
      <div
        id="innovation"
        className="flex flex-col items-center gap-6 pb-[120px] md:gap-[56px]"
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-heading text-[34px] md:text-5xl">
            OUR INNOVATIONS
          </p>
          <p className="text-normal text-lg text-center">
            Uniswap solves the spot DEX problems. <br /> Derivable solves the
            perpetual futures DEX problems
          </p>
        </div>
        {matches ? (
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-row justify-center max-w-[900px] flex-wrap items-start gap-8">
              {innovation.map((item, idx) => (
                <InnovationCard key={idx} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col items-center gap-8">
            <div className="flex flex-row justify-center max-w-[343px] items-start gap-8">
              <Carousel
                show={1.2}
                slide={1}
                swiping={true}
                useArrowKeys
                rightArrow={
                  <div
                    className="absolute w-[55.2px] h-full opacity-0 bg-transparent right-0"
                    onClick={() => pageIndicater()}
                  ></div>
                }
              >
                {innovation.map((item, idx) => (
                  <InnovationCard key={idx} item={item} />
                ))}
              </Carousel>
            </div>
            <EllipseSlider currentPage={page} setPage={setPage} />
          </div>
        )}
      </div>
    </>
  );
};

export default Innovation;
