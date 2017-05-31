import React from 'react'
import './Prompt.css'

export default function(props) {
	return (
			<input type="text" value={props.content}
			 className='Prompt'
		    />
			)			   
}