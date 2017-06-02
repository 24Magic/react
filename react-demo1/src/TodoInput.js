import React from 'react'
import './TodoInput.css'

export default function(props) {
	return (
			<input type="text" value={props.content}
			 className='TodoInput'
			 onChange={changeTitle.bind(null, props)}
			 onKeyPress={submit.bind(null, props)} />
			)			   
}

function submit(props, e){
	props.onKeyPress(e)
}

function changeTitle(props, e){
	props.onChange(e)
}
