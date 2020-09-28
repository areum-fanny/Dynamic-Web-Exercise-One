import React from 'react';
import ArticleCard from '../components/ArticleCard';
import Data from '../components/data'

function ArticleListing() {
    return (
        <main>
            <header>
                <h1>Article Listing</h1> 
            </header>
            {Data.map((article,i)=>(
                <ArticleCard key = {i} articleData = {article} />
            ))}
            
        </main>
    );
}

export default ArticleListing;