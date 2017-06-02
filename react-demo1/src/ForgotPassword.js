import React, {Component} from 'react'

export default class ForgotPasswordForm extends Component {

	constructor(props){
		super(props)
		this.state=({
			className: ''
		})
	}
	render () {
		return (
			<div className="forgotPassword">
				<p>重置密码</p>
				<div className="panes">
					<form className="forgotPassword" onSubmit={this.props.onSubmit} > {/* 登陆*/}
						<div className="row">
							<div className={this.state.className}>邮箱</div>	
							<input placeholder="Email" type="email" value={this.props.formData.email}
							 onChange={this.props.onChange.bind(null, 'email')} 
							 onFocus={this.focus.bind(this)}
					 		 onBlur={this.blur.bind(this)}
							/>
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

	focus(e){		
		if(e.type === 'focus'){
			this.setState({
				className: 'active1'
			})
		}
	}

	blur(e){		
		if(e.type === 'blur'){
			this.setState({
				className: ''
			})
		}
	}
	
}