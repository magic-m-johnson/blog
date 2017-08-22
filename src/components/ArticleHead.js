import React, { Component } from 'react';

export default class ArticleHead extends Component {
	render() {
		return <h3>{this.props.content}</h3>;
	}
}