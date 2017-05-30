import React, {Component} from 'react'
import './TodoItem.css'
import '../public/iconfont/iconfont.css'

export default class TodoItem extends Component {
	render(){
		let iconAttachment = (
			<div className="attachment">
			<i className="iconfont icon-attachment"></i>
			<span className='title'>{this.props.todo.title}</span>
			</div>
		)
		let iconSuccess = (
			<div className="success">
			<i className="iconfont icon-success"></i>
			<span className='title'>{this.props.todo.title}</span>
			</div>
		)
		return (
			<div className='TodoItem'>
				<input className="check" type="checkbox" checked={this.props.todo.status==='completed'}
				 onChange={this.toggle.bind(this)}/>
				{this.props.todo.status !== 'completed' ? iconAttachment : null}
				{this.props.todo.status === 'completed' ? iconSuccess : null}
						
				<button className="delete" onClick={this.delete.bind(this)}><i className="iconfont icon-delete"></i></button>
			</div>
		)
	}

	delete(e){
		this.props.onDelete(e, this.props.todo)
		// this.state.todoList.splice(this.props.key, 1)
	}

	toggle(e){
		this.props.onToggle(e, this.props.todo)
	}

}
