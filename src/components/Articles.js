import React, { Component } from 'react';
import Article from './Article';

export default class Articles extends Component {
	renderArticles() {
		var articles = [];
		
		this.props.articles.map(function(article, index) {
			articles.push(<Article article={article} index={index} />)
		});
		
		return articles;
	}
	
	render(props) {
		return (
			<div>
				{this.renderArticles()}
			</div>
		)
	}
}