import React from "react";
import { setVote } from "../store/actions.js";
import "../styles/contentList.css";

class ContentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      staticList: [],
      isGet: false
    };
  }

  votelist = [];

  componentWillMount() {
    fetch("./data.json")
      .then(res => res.json())
      .then(json => {
        json.submissions.forEach(ele => {
          ele.submissionImage = require("../../public/images/submissions/" +
            ele.submissionImage);
          ele.avatar = require("../../public/images/avatars/" + ele.avatar);
        });
        this.setState({
          products: json.submissions,
          staticList: json.submissions,
          isGet: true
        });
        console.log("json data", json);
      })
      .catch(e => console.log("fetch error:", e));
  }

  componentDidMount() {
    this.props.onRef && this.props.onRef(this);
  }

  search = val => {
    let showList = Object.assign(this.state.staticList);

    if (val && val.trim()) {
      showList = showList.filter(item => {
        return item["title"].toLowerCase().indexOf(val.toLowerCase()) > -1;
      });

      this.setState({
        products: showList
      });
    }
  };

  handleProductUpVote = productId => {
    const nextProducts = this.state.products.map(product => {
      if (product.id === productId) {
        const p = Object.assign({}, product, {
          votes: product.votes + 1
        });

        this.props.onvote(p);

        return p;
      } else {
        return product;
      }
    });

    this.setState({
      products: nextProducts
    });
  };

  handleProductDelete = (index) =>{
    let list  = this.state.products.splice(index,1);
    this.setState({
        products: list
      });
  }

  render() {
    if (this.state.isGet) {
      const products = this.state.products.sort((a, b) => b.votes - a.votes);
      const productComponents = products.map((product,index) => (
        <Product
          key={"product-" + product.id}
          id={product.id}
          index = {index}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submissionImage={product.submissionImage}
          avatar={product.avatar}
          onVote={this.handleProductUpVote}
          onDelete={this.handleProductDelete}
        />
      ));
      return (
        <div className="contentMain">
          <div className="items"> {productComponents} </div>
        </div>
      );
    } else {
      return <div> </div>;
    }
  }
}

class Product extends React.Component {handleDelete
  handleUpVote = () => this.props.onVote(this.props.id);
  handleDelete = () => this.props.onDelete(this.props.index);

  render() {
    return (
      <div className="item">
        <div className="submissionimg">
          <img className="submissionImage" src={this.props.submissionImage} />
        </div>
        <div className="middlecontent">
          <div className="description">
            <a href={this.props.url}> {this.props.title} </a>
            <span> #{this.props.id} </span> <p> {this.props.description} </p>
          </div>
          <div className="extra">
            <span> Submitted by: </span>
            <img className="image" src={this.props.avatar} />
          </div>
        </div>
        <div className="votes" onClick={this.handleUpVote}>
          <a>
            <i className="iconfont iconupvote" />
          </a>
          {this.props.votes}
          <span onClick={this.handleDelete}><i className="iconfont icondelete1"></i></span>
        </div>
      </div>
    );
  }
}

export default ContentList;
