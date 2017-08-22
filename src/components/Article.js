import React, { Component } from 'react';
import ArticleHead from './ArticleHead';
import ArticleContent from './ArticleContent';

export default class Article extends Component {
	render() {
		return (
			<div id={this.props.index}>
				<ArticleHead content={this.props.article.head} />
				<ArticleContent content={this.props.article.content} />
			</div>
		)
	}
}