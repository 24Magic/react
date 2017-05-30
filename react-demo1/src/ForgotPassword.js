import React, {Component} from 'react'

export default class ForgotPasswordForm extends Component {
	render () {
		return (
			<div className="forgotPassword">
				<p>重置密码</p>
				<div className="panes">
					<form className="forgotPassword" onSubmit={this.props.onSubmit} > {/* 登陆*/}
						<div className="row">
							<input placeholder="邮箱" type="email" value={this.props.formData.email}
							 onChange={this.props.onChange.bind(null, 'email')} />
						</div>
						<div className="row actions">
							<a href="#" onClick={this.props.onSignIn}>返回登陆</a>
							<button type="submit">发送重置邮件</button>
						</div>
					</form>
				</div>			
			</div>
		)
	}
}