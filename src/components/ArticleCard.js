import React from 'react';

function ArticleCard({articleData}) {
    return (
        <div>
            <h2>{articleData.title}</h2>
            <h3>{articleData.blurb}</h3>
        </div>
    );
}

export default ArticleCard;