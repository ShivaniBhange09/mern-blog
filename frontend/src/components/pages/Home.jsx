import React, { useContext, useState } from "react";
import LatestBlogs from "../miniComponents/LatestBlogs";

import TrendingBlogs from "../miniComponents/TrendingBlogs";
import PopularAuthors from "../miniComponents/PopularAuthors";
import { Context } from "../../main";

const Home = () => {
  const { mode, blogs } = useContext(Context);
  const filteredBlogs = blogs.slice(0, 6);
  return (
    <>
    
      <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
        <TrendingBlogs />
        <LatestBlogs heading={"Latest Blogs"} blogs={filteredBlogs} />
        <PopularAuthors />
      </article>
    </>
  );
};

export default Home;
