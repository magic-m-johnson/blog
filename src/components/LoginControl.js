import React from 'react';

export default function	LoginControl(props) {
	var element;
	// show login form when user is not logged in, otherwise show logout button
	if (props.isLoggedIn === false) {
		element = (
			<form onSubmit={props.handleLogin}>
				<h3>Login</h3>
				<label htmlFor="username">Username: </label>
				<input type="text" name="username" onChange={props.handleInputChange}/>
				<br/>
				<label htmlFor="password">Password: </label>
				<input type="password" name="password" onChange={props.handleInputChange}/>
				<br/>
				<input type="submit" value="Login"/>
			</form>
		);
	} else {
		element = (
			<div>
				<button onClick={props.handleLogout}>Logout</button>
			</div>
		);
	}
	
	return element;
}
