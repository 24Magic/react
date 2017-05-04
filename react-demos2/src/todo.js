import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends React.Component {

	
	constructor(props){



		super(props)
		this.state = {
			date: new Date(),
			test: '1'
		}

		console.log('constructor: 初始化state和props')
	}

	componentWillMount(){

		this.setState({
			date: new Date(),
			test: 'componentWillMount'
		})

		console.log('componentWillMount: 已准备就绪')
	}

  	render (){


  		console.log('render: 开始render')

	  	return (
			<div className="welcome">
		    	<h1>Hello, {this.props.name}</h1>
		    	<h3>Now is {new Date().toLocaleTimeString()}.</h3>
		    </div>
		) 

  	}

  	componentDidMount(){

  		this.setState({
			date: new Date(),
			test: 'componentDidMount'
		})

  		console.log('componentDidMount: 已挂载到页面')
  	}

  	componentWillReceiveProps(){

  		this.setState({
			date: new Date(),
			test: 'componentWillReceiveProps'
		})

  	}

  	shouldComponentUpdate(){



  		return true
  	}

  	componentWillUpdate(){


  	}

  	componentDidUpdate(){

  		this.setState({
			date: new Date(),
			test: 'componentDidUpdate'
		})



  	}

  	componentWillUnmount(){

  	}
}

export default Welcome