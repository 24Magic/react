import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTodo: 'test',
      todoList: [
        {id: 1, title: '第一个待办'}
      ]
    }
  }
  render() {
    
    let todos = this.state.todoList.map(items, index)=>{
      return <li>{item.title}</li>
    })
    
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
        <input type="text" value={this.state.newTodo}/>
        </div>
        <p className="App-intro">
          To get started, edit<code>src/App.js</code> and save to load.
        </p>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}

export default App;
