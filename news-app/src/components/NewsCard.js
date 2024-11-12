import React from 'react';

const NewsCard = ({ article, setSelectedArticle }) => {
  return (
    <div className="news-card" onClick={() => setSelectedArticle(article)}>
      <img src={article.urlToImage} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    </div>
  );
};

export default NewsCard;