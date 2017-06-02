import React,{Component} from 'react'


export default class SignInForm extends Component {

	constructor(props){
		super(props)
		this.state=({
			className: '',
			value: ''
		})
	}

	render(){
		return (
			<form className="signIn" onSubmit={this.props.onSubmit.bind(this)}> {/* 登陆*/}
				<div className="row">	
					<div className={this.state.className}>用户名</div>				
					<input placeholder="Username" type="text" value={this.props.formData.username}
					 onChange={this.props.onChange.bind(null, 'username')}  
					 onFocus={this.focus.bind(this)}
					 onBlur={this.blur.bind(this)}
					/>
					{this.toggle.bind(this)}
				</div>
				<div className="row">
					<div className={this.state.className}>密码</div>					
					<input placeholder="Password" type="password" value={this.props.formData.password}
					 onChange={this.props.onChange.bind(null, 'password')}  
					 onFocus={this.focus.bind(this)}
					 onBlur={this.blur.bind(this)}
					/>
				</div>
				<div className="row actions">
					<a href="#" onClick={this.props.onForgotPassword}>忘记密码了?</a>
					<button type="submit">登陆</button>
				</div>
			</form>
		)
	}
	
	toggle(e){
		if(e.target.value !== ''){
			this.setState({
				className: 'active1',
				value: e.target.value
			})
		}
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

// function submitUsername(e){
// 	if(e.key === 'Enter'){
// 		if(e.target.value.trim() === ''){
// 			alert('用户名不能为空!')
// 		}
// 	}
// }
// function submitPassword(e){
// 	if(e.key === 'Enter'){
// 		if(e.target.value.trim() === ''){
// 			alert('密码不能为空!')
// 		}
// 	}
// }