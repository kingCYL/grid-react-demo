import React from "react";

class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.votes
    };
  }


  render() {
    if (this.state.votes.length) {
      const list = this.state.votes.map((item, index) => (
        <div key={item.id} className="voteItem">
          <div>
            <a href={item.url}> {item.title} </a>
          </div>
          <div> votes: {item.votes}</div>
          <div>
            Contributor: <img className="image" src={item.avatar} />
          </div>
        </div>
      ));
      return (
        <div className="votelist">
          <div className="votetitle"> Upvotes History: </div> <div> {list} </div>
        </div>
      );
    } else {
      return (
        <div className="votelist empty">

          You didn 't vote for anyone. Come and vote!
        </div>
      );
    }
  }
}
export default SideBar;
