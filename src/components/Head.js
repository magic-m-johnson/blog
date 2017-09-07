import React from 'react';

export default function Head(props) {
	return (
    <div style={{
      backgroundColor: "#047e4a",
      color: "white",
      margin: "-0.5em",
      padding: "1em"
    }}>
    <h1 id={props.name}>{props.content}</h1>
    </div>
  );
}
