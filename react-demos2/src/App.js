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
      newTodo: 'test',
      todoList: [
        {id: 1, title: '第一个待办'},
        {id: 2, title: '第二个待办'}
      ]
    }
  }


  render() {

    let todos = this.state.todoList.map((item, index) => {
      return <li>{item.title}</li>
      return (
        <li>
          <TodoItem todo={item}/>
        </li>
      )
    })


    return (
      <div className="App">
        <h2>我的待办</h2>
        <div className="inputWrapper">

          <TodoInput content={this.state.newTodo}/>
        </div>        
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}



export default App;
