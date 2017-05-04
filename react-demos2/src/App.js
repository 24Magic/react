import React, { Component } from 'react';
import 'normalize.css'
import './reset.css'
import './App.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem'

class App extends React.Component {

  constructor(props){

    super(props)
    this.state = {
      newTodo: '',
      todoList: [

      ]
    }
  }


  render() {

    let todos = this.state.todoList.map((item, index) => {
      return <li>{item.title}</li>
      return (
        <li key={index}>
          <TodoItem todo={item}/>
        </li>
      )
    })

    console.log(todos)

    return (
      <div className="App">
        <h2>我的待办</h2>
        <div className="inputWrapper">

          <TodoInput content={this.state.newTodo} onSubmit={this.addTodo}.bind(this)/>
        </div>        
        <ol>
          {todos}
        </ol>
      </div>
    );
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

}

let id =0

function idMaker(){
  id++
  return id
}


export default App;

