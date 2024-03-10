import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
      <p style={{color:"deeppink",fontWeight:"bold"}}>
        Welcome to our blog! We're excited to have you here.
      </p>
        <p style={{color:"deeppink"}}>
        Our Mission:
        </p>
        <p>
        At BlogBuzz, our mission is to provide a platform where individuals can express themselves, share their thoughts, and engage with a community of like-minded individuals. We believe in the power of storytelling and the importance of diverse perspectives.
        </p>
        <p style={{color:"deeppink"}}>
        What We Offer:
        </p>
        <p>
        Engaging Content: We strive to publish high-quality, informative, and entertaining content on a wide range of topics.
        Community Interaction: Our blog is not just about us; it's about building a community. We encourage our readers to engage with our content by leaving comments, sharing their own stories, and connecting with others.
        User-Friendly Experience: We've designed our website to be intuitive and easy to navigate, so you can focus on enjoying the content without any hassle.
        Continuous Improvement: We're always looking for ways to improve and evolve. Whether it's through feedback from our readers or staying up-to-date with the latest trends, we're committed to providing the best possible experience for our audience.
        </p>
        <p style={{color:"deeppink"}}>
        Get Involved:
        </p>
        <p>
        Are you passionate about writing? Do you have a story to share or an idea you want to explore? We'd love to hear from you! Contact us to learn more about how you can contribute to our blog.

        Thank you for being a part of our community. Happy blogging!
              </p>
      </div>
    </article>
  );
};

export default About;
