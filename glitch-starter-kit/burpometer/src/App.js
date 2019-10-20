import React from 'react';
import logo from './logo.svg';
import './App.css';
const { render } = require('react-dom');

// router
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;

// redux
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const votes = require('./reducers');


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>I burped</button>
        <p> You've burped times</p>
      </header>
    </div>
  );
}

export default App;
