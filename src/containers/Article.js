import React from "react";
import { useParams } from "react-router-dom";
import Data from '../components/data';
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
function Article() {
    let { id } = useParams();
    const articleData = Data.find((article)=> article.id === id);
    if(!articleData) return null;
    const date = new Date(articleData.publishedDate);
    const dayoftheWeek = date.getDay();
    const calendarDate = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return (
    <section className="Article">
        <header className="ArticleHeaderWrapper" style={{backgroundImage:`url('${articleData.image.url}')`}}>
            <div className="ArticleHeader">
            <h1>{articleData.title}</h1>
            <p>{`${days[dayoftheWeek]}, ${months[month]} ${calendarDate}, ${year}`}</p>
            <p className="ArticleHeaderBlurb">{articleData.blurb}</p>
        </div></header>
        
        <div className="ArticleBody">
            <article>
                {articleData.articleText.map((article,i)=>{
                    return <article.type key={i}>{article.data}</article.type>;
                })}
            </article>
        </div>
    </section>
  );
}

export default Article;
