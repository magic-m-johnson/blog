import React, { Component } from 'react';
import Login from './Login';
import Articles from './Articles'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [
				{head: 'abc', content: 'die katze liegt im schnee'},
				{head: 'lorem ipsum', content: 'test'}
			]
		};
	}
	
	getPosts() {
		// implement me
	}
		
	render() {	
		return (
			<div>
				<Articles articles={this.state.articles} />
				<Login />
			</div>
		);
	}
}

export default App;
