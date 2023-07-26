import React, { useState } from "react";
import { data } from "../../utilities/BlogsData";
import { bookmarkIcon } from "../../utilities/SvgIcons";

const RecentBlogs = () => {
  const [loadMore, setLoadMore] = useState(0);
  const handleLoadMore = () => {
    setLoadMore((loadMore) => loadMore + 1);
  };
  return (
    <div className="blogContainer">
      <ul className="blogList">
        {data.map((item, index, arr) => {
          let nextSetLoads = loadMore == 0 ? 20 : loadMore == 1 ? 35 : arr.length;
          return (
            index < nextSetLoads && (
              <li key={index} className="blogCard">
                <div className="blogLeft">
                  <div className="blogHeader">
                    <img
                      src={item.author_image}
                      alt="author_image"
                      className="blogAuthorImage"
                    />
                    <span>{item.author}</span>
                  </div>
                  <h4 className="blogTitle">{item.title}</h4>
                  <p className="blogDescription">{item.description}</p>
                  <div className="blogFooter">
                    <p>
                      {item.date} . {item.duration} read{" "}
                      {item.genre && (
                        <>
                          {" "}
                          <span>. </span>{" "}
                          <span className="blogGenre">{item.genre}</span>
                        </>
                      )}
                    </p>
                    <span>{bookmarkIcon}</span>
                  </div>
                </div>
                <div className="blogRight">
                  <img
                    src={item.image}
                    alt="blog_Image"
                    className="blogImage"
                  />
                </div>
              </li>
            )
          );
        })}
      </ul>
      <div className="blogLoadMore">
        {loadMore < 2 && (
          <button onClick={handleLoadMore}>Load more stories</button>
        )}
      </div>
    </div>
  );
};

export default RecentBlogs;
