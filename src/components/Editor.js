import React from 'react';

export default function Editor(props) {
	return (
		<form onSubmit={props.createArticle}>
			<h1>Editor</h1>
			<input type="hidden" name="editor_id" value={props.id}/>
			<label htmlFor="headline">Headline: </label>
			<input value={props.head} type="text" name="editor_head" id="head" placeholder="Headline" onChange={props.handleInputChange}/>
			<br/>
			<span>Content: </span>
			<textarea value={props.content} id="content" name="editor_content" placeholder="Insert content here..." onChange={props.handleInputChange}></textarea>
			<br/>
			<input type="submit"/>
		</form>
	);
}
