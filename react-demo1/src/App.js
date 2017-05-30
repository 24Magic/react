import React, { Component } from 'react';
import './App.css';
import 'normalize.css'
import './reset.css'
import '../public/iconfont/iconfont.css' 
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import Prompt from './Prompt'
import UserDialog from './UserDialog'
import {getCurrentUser, signOut} from './leanCloud'


class App extends Component {

  constructor(props){
    super(props)
    this.state={
        user: getCurrentUser()||{},
        newTodo: '',
        todoList: [],
        prompt: ''
    }
  }
  render() {
    let todos = this.state.todoList
      .filter((item)=>!item.deleted)
      .map((item, index)=>{
      return (
        <li  >
          <TodoItem  key={index} todo={item} onToggle={this.toggle.bind(this)}
           onDelete={this.delete.bind(this)}/>
           {console.log(this)}
        </li>
      )
    }) 

    return (
      <div className="App">
        <div className="bigTitle"><span>{this.state.user.username || '我'}</span> の Todo       
        </div>
        <button className="logOut">
          {this.state.user.id ? <span onClick={this.signOut.bind(this)}>LogOut</span>:null}
        </button>
        <div className="inputWrapper">
          <span className="edit"><i className="iconfont icon-edit"></i></span>
          <TodoInput content={this.state.newTodo}
           onChange={this.changeTitle.bind(this)}

           onKeyPress={this.submit.bind(this)}
           />
          <Prompt content={this.state.prompt} />
        </div>
        <ol className="todoList">
        {todos}
        </ol>   
        {this.state.user.id ? 
          null : 
          <UserDialog 
          onSignUp={this.onSignUpOrSignIn.bind(this)}
          onSignIn={this.onSignUpOrSignIn.bind(this)}
          /> 
        }
        <span className="unfold">{this.state.todoList.length > 9 ? <i className="iconfont icon-moreunfold"></i> : ''}</span>
      </div>
    )
  }

  componentDidiUpdate(){

  }

  submit (event) {
    if(event.key === 'Enter'){
      if(event.target.value.trim() !== ''){
        this.addTodo(event)
        this.setState({
          prompt: ''
        })
      }else{
        this.setState({
          prompt: 'Edit something'
        })
      }
      
    }
  }

  signOut(){
    signOut()
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.user = {}
    this.setState(stateCopy)
  }

  onSignUpOrSignIn(user){
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.user = user
    this.setState(stateCopy)
  }

  delete(event, todo){
    todo.deleted = true
    
    this.setState(this.state)
    console.log(this.props.key)
  }

  toggle(e, todo){
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state)
    console.log(todo.status)
  }

  changeTitle(event){
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })

  }

  addTodo(event){
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList   //每次添加todo后重置todo
    })
  }
}

export default App;

let id = 0

function idMaker(){
  id +=1

  return id
}
