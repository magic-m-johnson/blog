import React from 'react';
import Article from './Article';

export default function Articles(props) {
	return (
		<div id="articles" key="articles">
			{
				// render every article from props.articles
				props.articles.map(function(article) {
					return (
            <Article 
              key={"articles_" + article.id} 
              article={article} 
              index={article.id} 
              deleteArticle={props.deleteArticle} 
              isLoggedIn={props.isLoggedIn} 
              articleDetails={props.articleDetails}
            />)
				})
			}
		</div>
	)
}
