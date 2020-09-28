import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ articleData }) {
  return (
    <div>
      <img src={articleData.image.url} alt={articleData.image.alt}></img>
      <h2>{articleData.title}</h2>
      <p>{articleData.publishedDate}</p>
      <p>{articleData.blurb}</p>
      <Link to={`/article/${articleData.id}`}>Read More</Link>
    </div>
  );
}

export default ArticleCard;
