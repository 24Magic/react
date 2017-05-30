import React, {Component} from 'react'

export default function(props) {
	return (
		<form className="signIn" onSubmit={props.onSubmit.bind(this)}> {/* 登陆*/}
			<div className="row">					
				<input placeholder="用户名" type="text" value={props.formData.username}
				 onChange={props.onChange.bind(null, 'username')} />
			</div>
			<div className="row">					
				<input placeholder="密码" type="password" value={props.formData.password}
				 onChange={props.onChange.bind(null, 'password')} />
			</div>
			<div className="row actions">
				<a href="#" onClick={props.onForgotPassword}>忘记密码了?</a>
				<button type="submit">登陆</button>
			</div>
		</form>
	)
}