import React,{ Component } from 'react'
import './UserDialog.css'

export default class UserDialog extends Component {

	constructor(props){
		super(props)
		this.state={
			selected: 'signUp'
		}
	}
	render(){
		return (
			<div className="UserDialog-Wrapper">
				<div className="UserDialog">
					<nav onChange={this.switch.bind(this)}>
						<label><input type="radio" value="signUp" checked={this.state.selected === 'signUp'} />注册</label>
						<label><input type="radio" value="signIn" checked={this.state.selected === 'signIn'} />登陆</label>
					</nav>
					<div className="panes">
						<form className="signUp"> {/* 注册*/}
							<div className="row">
								<label>用户名</label>
								<input type="text" />
							</div>
							<div classNmae="row">
								<label>密码</label>
								<input type="password" />
							</div>
							<div classNmae="row actions">
								<button type="submit">注册</button>
							</div>
						</form>
						<form className="signIn"> {/* 登陆*/}
							<div className="row">
								<label>用户名</label>
								<input type="text" />
							</div>
							<div classNmae="row">
								<label>密码</label>
								<input type="password" />
							</div>
							<div classNmae="row actions">
								<button type="submit">登录</button>
							</div>
						</form>
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
}