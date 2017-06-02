import React,{Component} from 'react'
import './Username.css'

export default class Username extends Component {

	constructor(props){
		super(props)
		this.state=({
			className1: '',
			className2: ''			
		})
	}
	render(){
		return (
			<div className="Username">
					<div className={this.state.className1}>用户名</div>					
					<input placeholder="" type="text" value={this.props.formData.username}
					 onChange={this.props.onChange.bind(null, 'username')} 
					 onFocus={this.focus.bind(this)}
					 onBlur={this.blur.bind(this)}
					/>
					<span className={this.state.className2}>6~20位字符,含有数字或字母或下划线</span>
				</div>
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