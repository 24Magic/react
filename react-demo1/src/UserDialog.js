import React,{ Component } from 'react'
import './UserDialog.css'
import {signUp, signIn} from './leanCloud'

export default class UserDialog extends Component {

	constructor(props){
		super(props)
		this.state={
			selected: 'signUp',
			formData: {
				username: '',
				password: '',
				email: ''
			}
		}
	}
	render(){

		let signUpForm = (
			<form className="signUp" onSubmit={this.signUp.bind(this)}> {/* 注册*/}
				<div className="row">
					
					<input placeholder="用户名" type="text" value={this.state.formData.username}
					 onChange={this.changeFormData.bind(this, 'username')} />
				</div>
				<div className="row">
					
					<input placeholder="密码" type="password" value={this.state.formData.password}
					 onChange={this.changeFormData.bind(this, 'password')} />
				</div>
				<div className="row">
					
					<input placeholder="邮箱" type="email" value={this.state.formData.email}
					 onChange={this.changeFormData.bind(this, 'email')} />
				</div>
				<div className="row actions">
					<button type="submit">注册</button>
				</div>
			</form>
		)
		let signInForm = (
			<form className="signIn" onSubmit={this.signIn.bind(this)} > {/* 登陆*/}
				<div className="row">

					<input placeholder="用户名" type="text" value={this.state.formData.username}
					 onChange={this.changeFormData.bind(this, 'username')} />
				</div>
				<div className="row">

					<input placeholder="密码" type="password" value={this.state.formData.password}
					 onChange={this.changeFormData.bind(this, 'password')} />
				</div>
				<div className="row actions">
					<button type="submit">登陆</button>
				</div>
			</form>
		)
		return (

			<div className="UserDialog-Wrapper">
				<div className="UserDialog">
					<nav>

						<label>
						
						<input type="radio" value="signUp" 
						 checked={this.state.selected === 'signUp'}
						 onChange={this.switch.bind(this)} /><span>注册</span>
						</label>

						<label>
					
						<input type="radio" value="signIn" 
						 checked={this.state.selected === 'signIn'}
						 onChange={this.switch.bind(this)} /><span>登陆</span>
						</label>
					</nav>
					<div className="panes">		
						{this.state.selected === 'signUp' ? signUpForm : null}
						{this.state.selected === 'signIn' ? signInForm : null}
					</div>
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
			alert('该用户已被注册')
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
			alert('该用户已被注册')
		}
		signIn(username, password, success, error)
	}

	changeFormData(key, e){
		let stateCopy = JSON.parse(JSON.stringify(this.state))	//因为不能直接修改this.state, 使用JSON深拷贝
		stateCopy.formData[key] = e.target.value
		this.setState(stateCopy)
	}

}
