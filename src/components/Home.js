import React from "react";
import TitleSection from "../subcomponents/Home/TitleSection";
import TrendingSection from "../subcomponents/Home/TrendingSection";
import TopicCards from "../subcomponents/Home/TopicCards";
import RecentBlogs from "../subcomponents/Home/RecentBlogs";
import Footer from "./Footer";
import '../css/Home.css'

const Home = () => {
  return (
    <div>
      <TitleSection />
      <TrendingSection />
      <div className="midSection">
        <TopicCards />
        <RecentBlogs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
