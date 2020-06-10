import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Article from './single.article';

const Exploreleft = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsArticles = await axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
      console.log(newsArticles);
      setNews(newsArticles.data.articles);
    }
    fetchNews()
  })
  return (
    <div>
      {
        news.map((article, i) => (
          <div>
            <Article article={article} />
          </div>
        ))
      }
    </div>
  )
}

export default Exploreleft;