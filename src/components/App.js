import React from "react";
import { Provider } from "react-redux";
import store from "../store/index.js";
import Header from "./header.js";
import SideBar from "./sidebar.js";
import ContentList from "./content.js";
import logo from "./logo.svg";
import "../styles/App.css";

class App extends React.Component {


  state = {
    votes: [],
    infolist: ["v16.8.6", "Languages", "GitHub"]
  }

  handleInput = (val) => {
    this.child.search(val);
  }

  addVote = (item) => {

    let votelist = this.state.votes;

    if (votelist.find(ele => ele.id === item.id)) {
      votelist.forEach(ele => {
        if (ele.id === item.id) ele.votes = item.votes;
      });
    } else {
      votelist.push(item);
    }

    this.setState({
      votes: votelist
    })
  }

  onRef = (ref) => {
    this.child = ref;
  }


  render() {
    return (
      <Provider store={store}>
        <div className="home-main">
          <Header info={this.state.infolist} oninput={this.handleInput} />
          <ContentList onRef={this.onRef} onvote={this.addVote} />
          <SideBar className="sidebar" votes={this.state.votes} />
          <div className="footer">
            <div className="footerlogo">
              <div className="logoImgDiv">
                <img src={logo} className="logoImg" alt="logo" />
              </div>
              <div> React </div>
            </div>
            <div className="bgc bgc-1">Copyright © 2019 Facebook Inc.</div>
            <div className="bgc bgc-2">English Document</div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
