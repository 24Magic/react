import React,{ Component } from 'react'
import './UserDialog.css'
import {signUp, signIn, sendPasswordResetEmail} from './leanCloud'
import ForgotPassword from './ForgotPassword'
import SignUpOrSignIn from './SignUpOrSignIn'


export default class UserDialog extends Component {

	constructor(props){
		super(props)
		this.state={
			selectedTab: 'SignUpOrSignIn',
			formData: {
				username: '',
				password: '',
				email: ''
			}
		}
	}
	render(){
		return (
			<div className="UserDialog-Wrapper">
				<div className="UserDialog">
					{this.state.selectedTab === 'SignUpOrSignIn' ? 
					 <SignUpOrSignIn
					  formData={this.state.formData}
					  onChange={this.changeFormData.bind(this)}
					  onSignUp={this.signUp.bind(this)}
					  onSignIn={this.signIn.bind(this)}
					  onForgotPassword={this.showForgotPassword.bind(this)}
					  onCheckInfo={this.checkInfo.bind(this)}
					  />
					  : 
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

	checkUsername(username){
		//判断用户名,6~20位任意数字或字母或下划线
		let reg1 = /^\w{6,20}$/g
		if(username.length>0){
			if(reg1.test(username) === false){
				alert('不合法用户名')
			}else{
				return true
			}
		}else{
			alert('请输入用户名')
		}
	}

	checkPassword(password){
		//判断密码,6~20位任意数字或字母或下划线,但是至少含有其中2种
		let reg2 = /\W/g
		let reg3 = /^[0-9]+$|^[a-z]+$|^[A-Z]+$|^_+$/g
		if(password.length>0){
			if(password.length < 6 || password.length > 20 || reg2.test(password)){
				alert('不合法密码')
			}else{
				if(reg3.test(password)){
					alert('不合法密码')
				}else{
					return true
				}
			}
		}else{
			alert('请输入密码')
		}
	}

	checkEmail(email){
		//判断邮箱,带有@和.com的完整邮箱地址		
		let reg4 = /^\w+@\w+\.com$/g
		if(email.length>0){
			if(reg4.test(email) === false){
				alert('不合法邮箱地址')
			}else{
				return true
			}
		}else{
			alert('请输入邮箱地址')
		}
	}
	checkInfo(username, password, email){

		if(this.checkUsername(username) && this.checkPassword(password) && this.checkEmail(email)){
			return true
		}		
	}

	signUp(e){
		e.preventDefault()
		let {username, password, email} = this.state.formData
		let success,error
		if(this.checkInfo(username, password, email)){
			 success = (user)=>{
				this.props.onSignUp.call(null, user)
			}
		}else{
			error = (error)=>{
				switch(error.code){
					case 202:
					alert('该用户已被占用')
					break
					case 203:
					alert('邮箱地址已被占用')
					break
					case 205:
					alert('找不到邮箱地址对应的用户')
					break
					case 502:
					alert('服务器维护中')
					break
					default:
					alert('请正确填写注册信息')
					break
				}
				
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
		stateCopy.selectedTab = 'SignUpOrSignIn'
		this.setState(stateCopy)
	}
}
