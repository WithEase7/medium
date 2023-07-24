import React from "react";
import TitleSection from "../subcomponents/Home/TitleSection";
import TrendingSection from "../subcomponents/Home/TrendingSection";
import TopicCards from "../subcomponents/Home/TopicCards";
import RecentBlogs from "../subcomponents/Home/RecentBlogs";
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
    </div>
  );
};

export default Home;
