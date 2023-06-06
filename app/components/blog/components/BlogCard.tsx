import React from "react";
import blog1 from "../../../icons/blog/blog-1.png";
import Image from "next/image";

const BlogCard = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-6">
        <Image src={blog1} alt="blog-1" />
        <div className="flex flex-col items-start gap-6 ">
          <div className="flex flex-col items-start gap-3">
            <span className="text-normal !text-[#4185EC] text-[11px]">
              TOPIC 1
            </span>
            <span className="text-heading text-xl">
              Lorem ipsum dolor sit amet consect. Sit convallis nulla ipsum
              augue.
            </span>
            <span className="text-normal text-sm">
              Lorem ipsum dolor sit amet consectetur. Diam mattis a in convallis
              eu. Bibendum nec ac magnis nunc facilisis vitae rutrum ultrices.
            </span>
          </div>
        </div>
        <span className="text-normal text-xs !text-[#757185]">
          Last updated: January 30, 2023
        </span>
      </div>
    </>
  );
};

export default BlogCard;
