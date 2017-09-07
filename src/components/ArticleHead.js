import React from 'react';

export default function ArticleHead(props) {
	return (
    <div style={{ cursor: "pointer" }}>
      <span id="header" onClick={() => props.handleClick(props.id)}>
        <h3>{props.content}</h3>
      </span>
    </div>
  );
}
