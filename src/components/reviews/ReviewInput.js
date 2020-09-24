import React, { Component } from "react";

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state.text, this.props.restaurantId);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            id="text"
            name="text"
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
