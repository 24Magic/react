import React,{Component} from 'react'



export default class SignUpForm extends Component {

	constructor(props){
		super(props)
		this.state=({
			className1: '',
			className2: ''
		})
	}

	render(){
		return (
			<form className="signUp" onSubmit={this.props.onSubmit.bind(this)}> {/* 注册*/}
				<div className="row">
					<div className={this.state.className1}>用户名</div>					
					<input placeholder="Username" type="text" value={this.props.formData.username}
					 onChange={this.props.onChange.bind(null, 'username')} 
					 onFocus={this.focus.bind(this)}
					 onBlur={this.blur.bind(this)}
					/>
					<span className={this.state.className2}>6~20位字符,含有数字或字母或下划线</span>
				</div>
				
				<div className="row">
					<div className={this.state.className1}>密码</div>					
					<input placeholder="Password" type="password" value={this.props.formData.password} 
					 onChange={this.props.onChange.bind(null, 'password')} 
					 onFocus={this.focus.bind(this)}
					 onBlur={this.blur.bind(this)}
					/>
					<span className={this.state.className2}>6~20位字符,至少含有数字或字母或下划线中的2种</span>
				</div>
				<div className="row">
					<div className={this.state.className1}>邮箱</div>					
					<input placeholder="Email" type="text" value={this.props.formData.email}
					 onChange={this.props.onChange.bind(null, 'email')}  
					 onFocus={this.focus.bind(this)}
					 onBlur={this.blur.bind(this)}
					/>
					<span className={this.state.className2}>带有@和.com的邮箱地址</span>
				</div>
				<div className="row actions">
					<button type="submit">注册</button>
				</div>
			</form>
		)
	}
	
	focus(e){
		
		if(e.type === 'focus'){
			this.setState({
				className1: 'active1',
				className2: 'active2'
			})
		}
	}

	blur(e){
		if(e.type === 'blur'){
			this.setState({
				className1: '',
				className2: ''
			})
			
		}
	}

	
}

 