import React from 'react';

export default function Head(props) {
	return <h1 id={props.name}>{props.content}</h1>;
}