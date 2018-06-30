import React, { Component } from 'react';
import Posts from './components/Posts';
import Postform from './components/Postform';
import {Provider} from 'react-redux';
import store from './store';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">An extremely verbose Redux implementation</h1>
            <h1 className="App-title">Based on <a href="https://youtu.be/93p3LxR9xfM">this video</a> by <a href = "https://github.com/bradtraversy">Brad Traversy</a></h1>
          </header>
          <Postform/>
          <hr/>
          <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;
