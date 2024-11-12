import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ articles, setSelectedArticle }) => {
  return (
    <div className="news-list">
      {articles.map((article) => (
        <NewsCard key={article.url} article={article} setSelectedArticle={setSelectedArticle} />
      ))}
    </div>
  );
};

export default NewsList;