import React from 'react';
import ArticleHead from './ArticleHead';
import ArticleContent from './ArticleContent';

export default function Article(props) {
	let button = props.isLoggedIn === true ? <button onClick={props.deleteArticle.bind(this, props.article.id)}>X</button> : <span></span>;
  
  const goBack = props.goBack && <button onClick={props.goBack}>Back</button>;
  const date = props.goBack && <div>{props.article.date}</div>;
	
	return (
		<div 
      style={{ 
        display: "inline-box",
        width: "80%",
        border: "solid 0.1em black",
        marginLeft: "10%",
        marginTop: "2em",
        padding: "1em"
      }} 
      id={"article_" + props.article.id}
    >
			<ArticleHead 
        id={props.article.id}
        content={props.article.head} 
        handleClick={props.articleDetails}
      />
			{button}
      {date}
			<ArticleContent content={props.article.content} />
      {goBack}
		</div>
	)
}
