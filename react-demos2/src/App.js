import React, { Component } from 'react';
<<<<<<< HEAD
=======

>>>>>>> d522883075bbb9ec7b1effb256d124f9def92f56
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

<<<<<<< HEAD
  render() {

    let todos = this.state.todoList.map((items, index) => {
      return <li>{item.title}</li>
    })

=======
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
    
>>>>>>> d522883075bbb9ec7b1effb256d124f9def92f56
    return (
      <div className="App">
        <h1>我的待办</h1>
        <div className="inputWrapper">
<<<<<<< HEAD
          <TodoInput content={this.state.newTodo}/>
        </div>
        <p className="App-intro">
          To get started, edit<code>src/App.js</code> and save to reload.
=======
        <input type="text" value={this.state.newTodo}/>
        </div>
        <p className="App-intro">
          To get started, edit<code>src/App.js</code> and save to load.
>>>>>>> d522883075bbb9ec7b1effb256d124f9def92f56
        </p>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}



export default App;
