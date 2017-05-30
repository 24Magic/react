import React from 'react'

export default function(props) {
	return (
		<form className="signUp" onSubmit={props.onSubmit.bind(this)}> {/* 注册*/}
			<div className="row">					
				<input placeholder="用户名" type="text" value={props.formData.username}
				 onChange={props.onChange.bind(null, 'username')} />
			</div>
			<div className="row">					
				<input placeholder="密码" type="password" value={props.formData.password}
				 onChange={props.onChange.bind(null, 'password')} />
			</div>
			<div className="row">					
				<input placeholder="邮箱" type="email" value={props.formData.email}
				 onChange={props.onChange.bind(null, 'email')} />
			</div>
			<div className="row actions">
				<button type="submit">注册</button>
			</div>
		</form>
	)
}