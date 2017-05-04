import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Welcome from './Welcome';
import './index.css';

function tick(){
	ReactDOM.render(
	  <Welcome name="wind"/>,
	  document.getElementById('root1')
	);
} 



ReactDOM.render(
  <App />,
  document.getElementById('root2')
);

// tick()

setInterval(tick, 1000)
