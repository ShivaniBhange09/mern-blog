import React, { useContext, useState } from "react";
import SideBar from "../layout/SideBar";
import MyBlogs from "../miniComponents/MyBlogs";
import MyProfile from "../miniComponents/MyProfile";
import CreateBlog from "../miniComponents/CreateBlog";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";
const Dashboard = () => {
  const [component, setComponent] = useState("MyBlogs");
  const { mode, isAuthenticated } = useContext(Context);

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <section
      className={mode === "dark" ? "dark-bg dashboard" : "light-bg dashboard"}
    >
      <SideBar component={component} setComponent={setComponent} />
      {component === "My Profile" ? (
        <MyProfile />
      ) : component === "Create Blog" ? (
        <CreateBlog />
      ) : (
        <MyBlogs />
      )}
    </section>
  );
};

export default Dashboard;
