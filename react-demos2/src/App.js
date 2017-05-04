import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput'

class App extends React.Component {

  construtor(props){
    super(props)
    this.state = {
      newTodo: 'test',
      todoList: [
        {id: 1, title: '第一个待办'}
      ]
    }
  }

  render() {

    let todos = this.state.todoList.map((items, index) => {
      return <li>{item.title}</li>
    })

    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo}/>
        </div>
        <p className="App-intro">
          To get started, edit<code>src/App.js</code> and save to reload.
        </p>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}



export default App;
