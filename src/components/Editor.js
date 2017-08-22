import React, { Component } from 'react';

class Editor extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(e) {
		alert('Hi');
		e.preventDefault();
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h1>Editor</h1>
				<label htmlFor="headline">Headline: </label>
				<input type="text" id="headline" placeholder="Headline"/>
				<br/>
				<span>Content: </span>
				<textarea id="content" placeholder="Insert content here..."></textarea>
				<br/>
				<input type="submit"/>
			</form>
		);
	}
}

export default Editor;