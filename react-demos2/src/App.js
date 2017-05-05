import React, { Component } from 'react'
import 'normalize.css'
import './reset.css'
import './App.css'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

class App extends React.Component {

  constructor(props){

    super(props)
    this.state = {
      newTodo: '',
      todoList: []
    }
  }


  render() {

    let todos = this.state.todoList
    .filter((item)=>!item.deleted)
    .map((item, index) => {
      return <li>{item.title}</li>
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={this.toggle.bind(this)}
           onDelete={this.delete.bind(this)}
          />
        </li>
      )
    })

    return (
      <div className="App">
        <h2>我的待办</h2>
        <div className="inputWrapper">

          <TodoInput content={this.state.newTodo}
            onChange={this.changeTitle.bind(this)}
            onSubmit={this.addTodo.bind(this)}/>
        </div>        
        <ol className='todoList'>
          {todos}
        </ol>
      </div>
    );
  }

  changeTitle(e){
    this.setState({
      newTodo: e.target.value,
      todoList: this.state.todoList 
    })
  }

  addTodo(e){
    this.state.todoList.push({
      id: idMaker(),
      title: e.target.value,
      status: null,
      deleted: false
    })

    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }

  toggle(e, todo){
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state)
  }

  delete(e, todo){
    todo.deleted = true
    this.setState(this.state)
  }

}

let id =0

function idMaker(){
  id++
  return id
}


export default App;

