import React from "react";
import App from './App.js';
import "../styles/header.css";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {

  state = {
    nav: [
      { title: "Docs", style: 'clickColor' },
      { title: "Tutorial", style: '' },
      { title: "Blog", style: '' },
      { title: "Community", style: '' }
    ]
  }

  handleChange = event => {
    this.props.oninput(event.target.value);
  };


  // handleStyle = (i) => {

  //   let navList = this.state.nav;
  //   navList.forEach(item => item.style = "");
  //   navList[i].style = 'clickColor';

  //   this.setState({
  //     nav: navList
  //   });

  //   console.log('inini',navList);
    
  // }

  menu = this.state.nav.map((item, i) => (
    <div key={i}>
      <Link to='/{item.title}' className={item.style}> {item.title} </Link>
    </div>
  ));

  info = this.props.info.map((item, index) => (
    <div key={index}> {item} </div>
  ));

  render() {
    return (
      <Router>
        <div className="header-layout">
          <div className="logo">
            <div className="logoImgDiv">
              <img src={logo} className="logoImg" alt="logo" />
            </div>
            <div className="appName"> React </div>
          </div>
          <div className="nav"> {this.menu} </div>
          <div className="search">
            <div>
              <span>
                <i className="iconfont iconsearch2" />
              </span>
              <input
                type="text"
                value={this.inputValue}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="infos"> {this.info} </div>
        </div>
        <Route exact path='/' Component={App}></Route>
        <Route exact path='/Docs' Component={App}></Route>
        <Route exact path='/Tutorial' Component={App}></Route>
        <Route exact path='/Blog' Component={App}></Route>
        <Route exact path='/Community' Component={App}></Route>
      </Router>
    );
  }
}

export default Header;
