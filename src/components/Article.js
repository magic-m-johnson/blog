import React from 'react';
import ArticleHead from './ArticleHead';
import ArticleContent from './ArticleContent';

export default function Article(props) {
	return (
		<div id={props.index}>
			<ArticleHead content={props.article.head} />
			<ArticleContent content={props.article.content} />
		</div>
	)
}
