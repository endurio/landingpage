import React from "react";
import { TwitterLogo } from "../../icons/blog/index";
import BlogCard from "./components/BlogCard";
import FilterCard from "./components/Filter";
import blog1 from "../../icons/blog/blog-1.png";
import blog2 from "../../icons/blog/blog-2.png";
import blog3 from "../../icons/blog/blog-3.png";
import blog4 from "../../icons/blog/blog-4.png";
import blog5 from "../../icons/blog/blog-5.png";
import blog6 from "../../icons/blog/blog-6.png";
import blog7 from "../../icons/blog/blog-7.png";
import blog8 from "../../icons/blog/blog-8.png";
import config from "../../config/index.json";

const Blog = (props) => {
  const { topic } = config;
  const imgArr = [blog2, blog3, blog4, blog5, blog6, blog7, blog8];

  return (
    <div className="flex flex-col gap-[56px] md:gap-[120px] md:min-w-[1280px]">
      <div className="flex flex-col justify-center items-center py-8 px-2 bg-[#252134] rounded-3xl w-full gap-4">
        <div className="text-heading text-[34px] flex text-center gap-2">
          Derivable<span className="text-blue-1">Blog</span>
        </div>
        <div className="flex flex-row items-center gap-3">
          <TwitterLogo />
          <span className="text-normal text-sm">Follow @Octan</span>
        </div>
      </div>
      <BlogCard
        isMain={true}
        topic={topic["topic-1"]}
        src={blog1}
        setUrl={props.setUrl}
      />
      <div className="md:flex md:flex-row md:items-center md:max-w-[1062px] md:justify-center">
        <div className="flex flex-col gap-[56px] md:flex md:flex-row md:items-start md:gap-6 md:max-w-[1062px] md:justify-center md:">
          <FilterCard />
          <div className="flex flex-col gap-8 md:flex md:flex-row md:items-center md:gap-[20px] md:max-w-[812px] md:flex-wrap">
            {imgArr.map((data, idx) => (
              <BlogCard
                topic={topic["topic-2"]}
                src={data}
                key={idx}
                setUrl={props.setUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
