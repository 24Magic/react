import React, { Component } from 'react';
import './App.css';
import 'normalize.css'
import './reset.css'
import '../public/iconfont/iconfont.css' 
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import Prompt from './Prompt'
import UserDialog from './UserDialog'
import {getCurrentUser, signOut, TodoModel} from './leanCloud'
import FreeScrollBar from 'react-free-scrollbar'


class App extends Component {

  constructor(props){
    super(props)
    this.state={
        user: getCurrentUser()||{},
        newTodo: '',
        todoList: [],
        prompt: ''
    }
    let user = getCurrentUser()
    if(user){
      TodoModel.getByUser(user, (todos)=>{
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.todoList = todos
        this.setState(stateCopy)
      })
    }   
  }
  render() {
    let todos = this.state.todoList
      .filter((item)=>!item.deleted)
      .map((item, index)=>{
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={this.toggle.bind(this)}
           onDelete={this.delete.bind(this)} />
        </li>
      )
    }) 

    return (
      <div className="container">
      {this.state.user.id ?
        <div className="App">
        <div className="bigTitle">Welcome <span>{this.state.user.username || ''}</span>      
        </div>
        
        {this.state.user.id ? 
          <button className="logOut">
            <span onClick={this.signOut.bind(this)}>LogOut</span>
          </button>
          :
          null
        }
        
        <div className="inputWrapper">
          <span className="edit"><i className="iconfont icon-edit"></i></span>
          <TodoInput content={this.state.newTodo}
           onChange={this.changeTitle.bind(this)}
           onKeyPress={this.submit.bind(this)}
          />
          <Prompt content={this.state.prompt} />
        </div>
        <ol className="todoList">
          <FreeScrollBar>
          {todos}
          </FreeScrollBar>
          
        </ol>   
        
        <span className="unfold">{todos.length > 8 ? <i className="iconfont icon-moreunfold"></i> : ''}</span>
        </div>
         :
          <UserDialog 
           onSignUp={this.onSignUpOrSignIn.bind(this)}
           onSignIn={this.onSignUpOrSignIn.bind(this)}
          /> 
        }
      </div>
    )
  }

  componentDidiUpdate(){

  }

  submit (event) {
    if(event.target.value.trim() !== ''){
      this.setState({
        prompt: ''
      })
    }
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
    let users = getCurrentUser()
    if (users) {
      TodoModel.getByUser(users, (todos) => {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.todoList = todos
        this.setState(stateCopy)
      })
    }
  }

  delete(event, todo){
    TodoModel.destroy(todo.id, () => {
      todo.deleted = true
      this.setState(this.state)
    })
  }

  toggle(event, todo){

    let oldStatus = todo.status
    todo.status = todo.status === 'completed' ? '' : 'completed'
    
    TodoModel.update(todo, () => {
      this.setState(this.state)
    }, (error) => {
      todo.status = oldStatus
      this.setState(this.state)
    })
  }

  changeTitle(event){
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })

  }

  addTodo(event){
    let newTodo = {
      title: event.target.value,
      status: '',
      deleted: false
    }
    TodoModel.create(newTodo, (id) => {
      newTodo.id = id
      this.state.todoList.push(newTodo)
      this.setState({
        newTodo: '',
        todoList: this.state.todoList   //每次添加todo后重置todo
      })
    }, (error) => {
      console.log(error)
    })
    
  }
}

export default App;


