import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>Connect Through</h3>
          
          <p>
            <span>Email:</span>shivanibhange09@gmail.com
            <br></br>
            <span>Email:</span>harshadabhor2004@gmail.com
            <br></br>
            <span>Email:</span>vaishnavibhoknal@gmail.com
          </p>
         
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="logo"> <img src="https://visionhospitalgoa.com/wp-content/uploads/2020/09/175-1757329_my-blog-logo-png-transparent-png.png"  style={{height:55,width:55,borderRadius:25}}/>BUZZ</div>
       
      </div>
    </footer>
  );
};

export default Footer;
