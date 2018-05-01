import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './views/Home'

import './App.css';

function Wrapper(props){
  return (
    <div>
      <NavBar />
      {/* <BrowserRouter> */}
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About}></Route>
        </Switch>
      {/* </BrowserRouter> */}
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Wrapper}/>
      </BrowserRouter>
    );
  }
}

export default App;

function About(){
  return (
    <p>about</p>
  )
}
