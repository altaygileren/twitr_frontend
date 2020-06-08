import React from 'react'
import { Card } from 'react-bootstrap';
import './articles.css';

export default function Article({ article }) {
  return (
    <a target="_blank" href={article.url}>
      <Card className="single-article-card">
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text className="article-body">
            <img className="article-img" src={article.urlToImage} />
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </a>
    
  )
}
