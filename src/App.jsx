import React, { Component } from 'react';
import LayoutElement from './LayoutElement';
import logo from './logo.svg';
import './App.css';

function Container(props){
  return(
    <div className="container" style={{width: props.width,height:props.height}}></div>
  );
}

class HomeLayout extends Component{
  renderContainer(containerHeight,containerWidth){
    return(
      <LayoutElement 
      editable = {false}
      />
    );
  }
}

class App extends Component {
  homeLayout=new HomeLayout();
  render() {
    return (
      <div className="main-container">
        <div className="inner-border">
          
        </div>
      </div>
    );
  }
}



export default App;

/* 
<div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p>
</div> */