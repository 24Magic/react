import React, {Component} from 'react'
import './TodoItem.css'
import '../public/iconfont/iconfont.css'

export default class TodoItem extends Component {
	render(){
		let iconAttachment = (
			<div className="attachment">
				<i className="iconfont icon-attachment"></i>
				<div className='title'>{this.props.todo.title}</div>
			</div>
		)
		let iconSuccess = (
			<div className="success">
				<i className="iconfont icon-success"></i>
				<div className='title'>{this.props.todo.title}</div>
			</div>
		)
		return (
			<div className='TodoItem'>
				<input className="check" type="checkbox" checked={this.props.todo.status==='completed'}
				 onChange={this.toggle.bind(this)}/>
				
				{this.props.todo.status === 'completed' ? iconSuccess : iconAttachment}
				
						
				<button className="delete" onClick={this.delete.bind(this)}><i className="iconfont icon-delete"></i></button>
			</div>
		)
	}

	delete(e){
		this.props.onDelete(e, this.props.todo)
	}

	toggle(e){
		this.props.onToggle(e, this.props.todo)
	}

}
