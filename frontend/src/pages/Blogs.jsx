import axios from "axios";
import React, { useEffect, useState } from "react";
import "./css/Blogs.css";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [Blogs, setBlogs] = useState();
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("https://mern-blog-17m6.onrender.com/api/v1/getAll")
        .then((res) => setBlogs(res.data.data));
    };
    fetch();
  }, []);
  return (
    <div className="container">
      <div className="row d-flex justify-content-center my-5">
        {Blogs &&
          Blogs.map((item, i) => (
            <div className="col-lg-3 blog-card m-3 p-3">
              <Link to={`/blogsPage/${item._id}`}>
                <h4>{item.title}</h4>
              </Link>
              {""}
              <p>{item.desc.slice(0, 400)}...</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
