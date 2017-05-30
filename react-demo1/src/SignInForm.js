import React, {Component} from 'react'

export default class SignInForm extends Component {
	render () {
		return (
			<form className="signUp" onSubmit={this.props.onSubmit.bind(this)}> {/* 登陆*/}
				<div className="row">					
					<input placeholder="用户名" type="text" value={this.props.formData.username}
					 onChange={this.props.onChange.bind(null, 'username')} />
				</div>
				<div className="row">					
					<input placeholder="密码" type="password" value={this.props.formData.password}
					 onChange={this.props.onChange.bind(null, 'password')} />
				</div>
				<div className="row actions">
					<a href="#" onClick={this.props.onForgotPassword}>忘记密码了?</a>
					<button type="submit">登陆</button>
				</div>
			</form>
		)
	}
}