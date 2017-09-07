import React from 'react';

export default function	LoginControl(props) {
	var element;
	// show login form when user is not logged in, otherwise show logout button
	if (props.isLoggedIn === false) {
		element = (
			<form onSubmit={props.handleLogin}>
				<h3>Login</h3>
        <table>
        <tr>
          <td>
            <label htmlFor="username">Username: </label>
          </td>
          <td>
          <input type="text" name="username" onChange={props.handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>
          <label htmlFor="password">Password: </label>
          </td>
          <td>
          <input type="password" name="password" onChange={props.handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>
          </td>
          <td>
          <input type="submit" value="Login"/>
          </td>
        </tr>
        </table>
			</form>
		);
	} else {
		element = (
			<div>
				<button style={{ marginTop: "1em" }} onClick={props.handleLogout}>Logout</button>
			</div>
		);
	}
	
	return element;
}
