import React, { Component } from 'react';
import './Sidebar.css';
import home_icon from "./assets/icons/home.svg"
import list_icon from "./assets/icons/list.svg"
import chart_icon from "./assets/icons/chart.svg"
import music_icon from "./assets/icons/musical-note.svg"
import settings_icon from "./assets/icons/cogwheel-outline.svg"



class Sidebar extends Component {
  render(){
    return (
      <div className="sidebar" id="navbar">
        <button href="#"><img height="55%" width="55%" alt="logo" src={home_icon} className="icon" /><h2>Home Layout</h2></button>
        <button href="#"><img height="55%" width="55%" alt="logo" src={chart_icon} className="icon" /><h2>Stats</h2></button>
        <button href="#"><img height="55%" width="55%" alt="logo" src={list_icon} className="icon" /><h2>List</h2></button>
        <button href="#"><img height="55%" width="55%" alt="logo" src={music_icon} className="icon" /><h2>Music</h2></button>
        <button href="#"><img height="55%" width="55%" alt="logo" src={settings_icon} className="icon" /><h2>Settings</h2></button>
      </div>
    );
  }
}

export default Sidebar;