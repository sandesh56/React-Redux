import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { postContent } from "../action/postAction";

export class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.postContent(post);
  }

  render() {
    return (
      <div>
        <h2>Add Post</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label>
            <br />
            <input
              type="text"
              onChange={this.onChange}
              name="title"
              placeholder="title here"
            />
          </div>
          <br />
          <div>
            <label>Body</label>
            <br />
            <input
              type="textArea"
              onChange={this.onChange}
              name="body"
              placeholder="body here"
            />
          </div>
          <br />
          <div>
            <button className="button-narrow" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
Postform.propTypes = {
  postContent: PropTypes.func.isRequired,
};

export default connect(null, { postContent })(Postform);
