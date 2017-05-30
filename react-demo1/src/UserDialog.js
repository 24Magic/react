import React,{ Component } from 'react'
import './UserDialog.css'
import {signUp, signIn, sendPasswordResetEmail} from './leanCloud'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import ForgotPassword from './ForgotPassword'

export default class UserDialog extends Component {

	constructor(props){
		super(props)
		this.state={
			selected: 'signUp',
			selectedTab: 'signInOrSignUp',
			formData: {
				username: '',
				password: '',
				email: ''
			}
		}
	}
	render(){

		let signInOrSignUp = (
			<div className="signInOrSignUp">
				<nav>
					<label>
						<input type="radio" value="signUp"
						 checked={this.state.selected === 'signUp'} 
						 onChange={this.switch.bind(this)}
						/><span>注册</span>
					</label>
					<label>
						<input type="radio" value="signIn"
						 checked={this.state.selected === 'signIn'} 
						 onChange={this.switch.bind(this)}
						/><span>登陆</span>
					</label>
				</nav>
				<div className="panes">
					{this.state.selected === 'signUp' ? 
						<SignUpForm formData={this.state.formData}
						 onSubmit={this.signUp.bind(this)}
						 onChange={this.changeFormData.bind(this)} 
						/>
						: null}
					{this.state.selected === 'signIn' ? 
						<SignInForm formData={this.state.formData}
						 onSubmit={this.signIn.bind(this)}
						 onChange={this.changeFormData.bind(this)} 
						 onForgotPassword={this.showForgotPassword.bind(this)}
						/>
						: null}
					
				</div>
			</div>
		)

		return (

			<div className="UserDialog-Wrapper">
				<div className="UserDialog">
					{this.state.selectedTab === 'signInOrSignUp' ? 
					 signInOrSignUp : 
					 <ForgotPassword 
					  formData={this.state.formData}
					  onSubmit={this.resetPassword.bind(this)}
					  onChange={this.changeFormData.bind(this)}
					  onSignIn={this.returnToSignIn.bind(this)}
					 />
					}
				</div>
			</div>
		)
	}

	switch(e){
		this.setState({
			selected: e.target.value
		})
	}

	signUp(e){
		e.preventDefault()
		let {username, password, email} = this.state.formData
		let success = (user)=>{
			this.props.onSignUp.call(null, user)
		}
		let error = (error)=>{
			switch(error.code){
				case 200:
				alert('用户名为空')
				break
				case 201:
				alert('密码为空')
				break
				case 202:
				alert('该用户已被占用')
				break
				case 203:
				alert('邮箱地址已被占用')
				break
				case 204:
				alert('没有提供邮箱地址')
				break
				case 205:
				alert('找不到邮箱地址对应的用户')
				break
				case 211:
				alert('找不到用户')
				break
				case 217:
				alert('无效的用户名，不允许空白用户名')
				break
				case 218:
				alert('无效的密码，不允许空白密码')
				break
				case 502:
				alert('服务器维护中')
				break
				default:
				alert('error')
				break
			}
			
		}
		signUp(username, password, email, success, error)
	}
	signIn(e){
		e.preventDefault()
		let {username, password} = this.state.formData
		let success = (user)=>{
			this.props.onSignIn.call(null, user)
		}
		let error = (error)=>{
			switch(error.code){
				case 200:
				alert('用户名为空')
				break
				case 201:
				alert('密码为空')
				break
				case 210:
				alert('用户名与密码不匹配')
				break
				case 211:
				alert('找不到用户')
				break
				case 502:
				alert('服务器维护中')
				break
				default:
				alert('error')
				break
			}
			
		}
		signIn(username, password, success, error)
	}

	changeFormData(key, e){
		let stateCopy = JSON.parse(JSON.stringify(this.state))	//因为不能直接修改this.state, 使用JSON深拷贝
		stateCopy.formData[key] = e.target.value
		this.setState(stateCopy)
	}

	showForgotPassword(){
		let stateCopy = JSON.parse(JSON.stringify(this.state))
		stateCopy.selectedTab = 'forgotPassword'
		this.setState(stateCopy)
	}

	resetPassword(e){
		e.preventDefault()
		sendPasswordResetEmail(this.state.formData.email)	
	}

	returnToSignIn(){
		let stateCopy = JSON.parse(JSON.stringify(this.state))
		stateCopy.selectedTab = 'signInOrSignUp'
		this.setState(stateCopy)
	}
}
