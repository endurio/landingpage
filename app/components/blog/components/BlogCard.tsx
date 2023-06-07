"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const BlogCard = (props) => {
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
      {props.isMain && (
        <div className="w-full md:flex md:justify-center md:items-center">
          <div className="flex flex-col md:flex-row md:w-[1062px] items-start gap-6">
            <Image src={props.src} alt="blog-1" className="md:w-[519px]" />
            <div className="flex flex-col items-start gap-6 md:max-w-[519px] md:h-full">
              <div className="flex flex-col items-start gap-3">
                <span className="text-normal !text-[#4185EC] text-[11px]">
                  {props.topic}
                </span>
                <span className="text-heading text-xl">
                  Lorem ipsum dolor sit amet consect. Sit convallis nulla ipsum
                  augue.
                </span>
                <span className="text-normal text-sm">
                  Lorem ipsum dolor sit amet consectetur. Diam mattis a in
                  convallis eu. Bibendum nec ac magnis nunc facilisis vitae
                  rutrum ultrices.
                </span>
              </div>
              {matches && (
                <span className="text-normal text-xs !text-[#757185]">
                  Last updated: January 30, 2023
                </span>
              )}
            </div>
            {!matches && (
              <span className="text-normal text-xs !text-[#757185]">
                Last updated: January 30, 2023
              </span>
            )}
          </div>
        </div>
      )}
      {!props.isMain && (
        <div className="flex flex-col items-start gap-6">
          <Image src={props.src} alt="blog-1" className="md:w-[394px]" />
          <div className="flex flex-col items-start gap-6 md:max-w-[394px]">
            <div className="flex flex-col items-start gap-3">
              <span className="text-normal !text-[#4185EC] text-[11px]">
                {props.topic}
              </span>
              <span className="text-heading text-xl">
                Lorem ipsum dolor sit amet consect. Sit convallis nulla ipsum
                augue.
              </span>
              <span className="text-normal text-sm">
                Lorem ipsum dolor sit amet consectetur. Diam mattis a in
                convallis eu. Bibendum nec ac magnis nunc facilisis vitae rutrum
                ultrices.
              </span>
            </div>
          </div>
          <span className="text-normal text-xs !text-[#757185]">
            Last updated: January 30, 2023
          </span>
        </div>
      )}
    </>
  );
};

export default BlogCard;
