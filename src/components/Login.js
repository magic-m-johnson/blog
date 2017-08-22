import React, { Component } from 'react';
import Editor from './Editor';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			isLoggedIn: false
		};
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}
	
	handleUsernameChange(e) {
		this.setState({username: e.target.value});
	}
	
	handlePasswordChange(e) {
		this.setState({password: e.target.value});
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
	
	render() {
		var element = '';
		if (this.state.isLoggedIn === false) {
			element = (
				<form onSubmit={this.handleLogin}>
					<h1>Login</h1>
					<label htmlFor="username">Username: </label>
					<input type="text" id="username" onChange={this.handleUsernameChange}/>
					<br/>
					<label htmlFor="password">Password: </label>
					<input type="password" id="password" onChange={this.handlePasswordChange}/>
					<br/>
					<input type="submit" value="Login"/>
				</form>
			);
		} else {
			element = (
				<div>
					<Editor />
					<br/>
					<button onClick={this.handleLogout}>Logout</button>
				</div>
			);
		}
		
		return element;
	}
}

export default Login;
