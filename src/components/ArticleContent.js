import React, { Component } from 'react';

export default class ArticleContent extends Component {
	render() {
		return <p>{this.props.content}</p>;
	}
}