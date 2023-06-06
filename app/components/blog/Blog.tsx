import React from "react";
import { TwitterLogo } from "../../icons/blog/index";
import BlogCard from "./components/BlogCard";
const Blog = () => {
  return (
    <div className="flex flex-col gap-[56px]">
      <div className="flex flex-col justify-center items-center py-8 px-2 bg-[#252134] rounded-3xl w-full gap-4">
        <div className="text-heading text-[34px] flex text-center gap-2">
          Derivable<span className="text-blue-1">Blog</span>
        </div>
        <div className="flex flex-row items-center gap-3">
          <TwitterLogo />
          <span className="text-normal text-sm">Follow @Octan</span>
        </div>
      </div>
      <BlogCard />
    </div>
  );
};

export default Blog;
