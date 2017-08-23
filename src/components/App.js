import React, { Component } from 'react';
import Head from './Head';
import Articles from './Articles';
import LoginControl from './LoginControl';
import Editor from './Editor';

import styles from '../style.css';

var axios = require('axios');

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles:  [],
			isLoggedIn: false,
			username: '',
			password: '',
			editor_id: 0,
			editor_head: '',
			editor_content: ''
		};
		
		this.getArticles = this.getArticles.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.createArticle = this.createArticle.bind(this);
		this.deleteArticle = this.deleteArticle.bind(this);
	}
	
	componentDidMount() {
		this.getArticles();
	}
	
	getArticles() {	
		const that = this;
		axios.get('/article').then(function(response){
			that.setState({articles: response.data});
			let articles = response.data;
			let id = articles.length === 0 ? 0 : articles[articles.length - 1].id + 1;
			that.setState({editor_id: id})
		});
	}
	
	handleInputChange(e) {		
		const target = e.target;
		const name = target.name;
		
		this.setState({
			[name]: target.value
		});
	}
	
	handleLogin(e) {
		if (this.state.username === 'admin' && this.state.password === 'admin') {
			this.setState({isLoggedIn: true});
		} else {
			alert('invalid user');
		}
		
		e.preventDefault();
	}
	
	handleLogout() {
		this.setState({isLoggedIn: false});
	}
	
	createArticle(e) {
		axios.post('/article', {id: this.state.editor_id, head: this.state.editor_head, content: this.state.editor_content});
		var id = this.state.editor_id + 1;
		this.setState({editor_id: id});
		this.setState({editor_head: ''});
		this.setState({editor_content: ''});
		e.preventDefault();
		this.getArticles();
	}
	
	deleteArticle(article_id) {
		console.log(article_id);
		axios.delete('/article/' + article_id);
		this.getArticles();
	}
		
	render() {
		let elements = [];
		elements.push(
			(
				<Head 
					key="head"
					name={"blog-head"} 
					content={"Simons Blog"} 
				/>
			),
			(
				<LoginControl
					key="LoginControl"
					isLoggedIn={this.state.isLoggedIn} 
					handleLogin={this.handleLogin}
					handleLogout={this.handleLogout}
					handleInputChange={this.handleInputChange}
				/>
			),
			(
				<Articles 
					key="articles" 
					articles={this.state.articles} 
					deleteArticle={this.deleteArticle} 
					isLoggedIn={this.state.isLoggedIn} 
				/>
			)
		);
		// only show editor when user is logged in
		if (this.state.isLoggedIn === true) {
			elements.push(
				<Editor
					key="editor"
					createArticle={this.createArticle}
					id={this.state.editor_id}
					head={this.state.editor_head}
					content={this.state.editor_content}
					handleInputChange={this.handleInputChange}
				/>
			);
		}
		
		return (
			<div>
				{ elements }
			</div>
		);
	}
}

export default App;
