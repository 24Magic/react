import React, {component} from 'react'

export default class TodoInput extends React.Component {
	render(){
		return <input type="text" defaultValue={this.props.content}/>
	}
}