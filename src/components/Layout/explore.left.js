import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Article from './single.article';

const Exploreleft = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsArticles = await axios.get(`${process.env.REACT_APP_BASE}/api/news`)
      console.log(newsArticles);
      setNews(newsArticles.news);
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