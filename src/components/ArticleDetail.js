import React from 'react';
import ArticleHead from './ArticleHead';
import ArticleContent from './ArticleContent';

export default function Article(props) {
	let button = props.isLoggedIn === true ? <button onClick={props.deleteArticle.bind(this, props.article.id)}>X</button> : <span></span>;
	
	return (
		<div id={"article_" + props.article.id}>
			{button}
			<ArticleHead 
        content={props.article.head} 
        handleClick={props.goToArticleDetails}/>
			<ArticleContent content={props.article.content} />
		</div>
	)
}
