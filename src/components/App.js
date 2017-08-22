import React, { Component } from 'react';
import Login from './Login';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [
				{title: 'abc', content: 'die katze liegt im schnee'},
				{title: 'lorem ipsum', content: 'test'}
			]
		};
	}
	
	getPosts() {
		// implement me
	}
		
	render() {
		var elements = [];
		
		this.state.posts.map(function(post, i) {
			elements.push(
				<div key={"post_" + i}>
					<h1>{post.title}</h1>
					<p>{post.content}</p>
				</div>
			)
		});
	
		return (
			<div>
				{elements}
				<Login />
			</div>
		);			
	
	}
}

export default App;
