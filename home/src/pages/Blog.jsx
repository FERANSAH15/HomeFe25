import React from "react";
import Article from "../components/Article";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Intro heading={"Artikel"} description={"Lebih dalam mengenal seni"} />
      <Article />
      <Footer />
    </>
  );
};
export default Blog;
