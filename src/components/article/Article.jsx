import React from 'react'

import './article.css';
const Article = ({imgUrl , title, title1, title2,title3 }) => {
  return (
    <div className='creamcollar__opp-container_article'>
      <div className='creamcollar__opp-container_article-image'>
          <img src={imgUrl} alt='oppimage'/>
      </div>
      <div className='creamcollar__opp-container_article-content'>
        <div>
          <h2>{title}</h2>
          <p>{title1}</p>
          <p>{title2}</p>
          <p>{title3}</p>
        </div>

      </div>
    </div>
  )
}

export default Article

