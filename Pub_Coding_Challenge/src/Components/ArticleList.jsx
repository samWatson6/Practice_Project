import React from 'react';
import ArticleEntry from './ArticleEntry.jsx'

const ArticleList = ({articles}) => (
  
  <div className='articleList'> 
    {articles.map((article) => 

      <ArticleEntry
        key={article.id}
        title={article.title}
        description={article.description}
        image={article.image_url}
        authors={article.authors}
        url={article.url}
       /> 

    )}
  </div>
);

export default ArticleList;