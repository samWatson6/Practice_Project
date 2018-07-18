import React from 'react';


const ArticleEntry = ({ title, description, image, authors, url}) => (
  <div>
    <h2><a href={ url }>  { title }  </a></h2>
    <img clasName="image" src={ image }/>
    <div> { description } </div>
    <div> { authors } </div>
  </div>
);

export default ArticleEntry;