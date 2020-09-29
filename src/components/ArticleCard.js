import React from "react";
import { Link } from "react-router-dom";
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
function ArticleCard({ articleData }) {
    const date = new Date(articleData.publishedDate);
    const dayoftheWeek = date.getDay();
    const calendarDate = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
  return (
    <div className="ArticleCard">
        <div className="ArticleCardImage">
            <img src={articleData.image.url} alt={articleData.image.alt}></img>
        </div>
        <div className="ArticleCardText">
            <h2>{articleData.title}</h2>
            <p>{`${days[dayoftheWeek]}, ${months[month]} ${calendarDate}, ${year}`}</p>
            <p>{articleData.blurb}</p>
            <Link to={`/article/${articleData.id}`} className="ArticleCardTextLink">Read More</Link>
        </div>
    </div>
  );
}

export default ArticleCard;
