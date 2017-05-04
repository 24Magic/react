import React, {component} from 'react'

export default class TodoInput extends React.Component {
	render(){
		return <input type="text" defaultValue={this.props.content}
			onKeyPress={this.submit}
		/>
	}

	submit(e){
		if(e.key === 'Enter') {
			this.props.onSubmit.call();
		}
	}
}