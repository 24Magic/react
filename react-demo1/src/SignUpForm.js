import React, {Component} from 'react'

export default class SignUpForm extends Component {
	render () {
		return (
			<form className="signUp" onSubmit={this.props.onSubmit.bind(this)}> {/* 注册*/}
				<div className="row">					
					<input placeholder="用户名" type="text" value={this.props.formData.username}
					 onChange={this.props.onChange.bind(null, 'username')} />
				</div>
				<div className="row">					
					<input placeholder="密码" type="password" value={this.props.formData.password}
					 onChange={this.props.onChange.bind(null, 'password')} />
				</div>
				<div className="row">					
					<input placeholder="邮箱" type="email" value={this.props.formData.email}
					 onChange={this.props.onChange.bind(null, 'email')} />
				</div>
				<div className="row actions">
					<button type="submit">注册</button>
				</div>
			</form>
		)
	}
}