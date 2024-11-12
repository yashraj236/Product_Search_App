import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [category, setCategory] = useState('general');

  const API_KEY = 'YOUR_API_KEY'; // Replace with your API key

  const fetchNews = async (category) => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
    setArticles(response.data.articles);
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  return (
    <div className="app">
      <Navbar setCategory={setCategory} />
      <div className="content">
        <NewsList articles={articles} setSelectedArticle={setSelectedArticle} />
        {selectedArticle && <NewsDetail article={selectedArticle} />}
      </div>
    </div>
  );
};

export default App;