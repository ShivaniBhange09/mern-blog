import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "./css/BlogsPage.css";
import { Link } from "react-router-dom";

const BlogsPage = () => {
  const id = useParams().id;
  const [Blog, setBlog] = useState();
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`https://mern-blog-17m6.onrender.com/api/v1/getBlog/${id}`)
        .then((res) => setBlog(res.data.data));
    };
    fetch();
  }, [id]);

  return (
    <div className="page container">
      <div className="my-3">
        {Blog && (
          <>
            <Link
              to={`/updateBlog/${Blog._id}`}
              className="d-flex justify-content-end edit"
            >
              <FaEdit />
            </Link>
            <h1 className="mt-3">{Blog.title}</h1>
            <p className="blogsPagep mt-5">{Blog.desc}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
