import React from 'react';
import Article from './Article';

export default function Articles(props) {
	return (
		<div>
			{
				props.articles.map(function(article, index) {
					return (<Article key={"article_" + index} article={article} index={index} />)
				})
			}
		</div>
	)
}
