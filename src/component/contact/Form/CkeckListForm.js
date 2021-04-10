import React, { Component } from "react";
import "./form.css";
import Button from '../../button/Button'

class CkeckListForm extends Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  handleChange=(event)=> {
    this.setState({ value: event.target.value });
  }

  handleSubmit=(event)=> {
    alert("Details have been captured successfully”: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="radio-btn">
          <form onSubmit={this.handleSubmit}>
            <label className="container">
              <input
                type="radio"
                checked="checked"
                name="radio"
                value={this.state.value}
                onChange={this.handleChange}
              ></input>
              Your great Project
            </label>
            <label className="container">
              <input
                type="radio"
                checked="checked"
                name="radio"
                value={this.state.value}
                onChange={this.handleChange}
              ></input>
              Meeting for a Coffee
            </label>
            <label className="container">
              <input
                type="radio"
                checked="checked"
                name="radio"
                value={this.state.value}
                onChange={this.handleChange}
              ></input>
              Birds and Bees
            </label>
            <label className="container">
              <input
                type="radio"
                checked="checked"
                name="radio"
                value={this.state.value}
                onChange={this.handleChange}
              ></input>
              Plan a video call
            </label>
            <Button/>
          </form>
        </div>
      </>
    );
  }
}

export default CkeckListForm;
