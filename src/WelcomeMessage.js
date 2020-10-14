import React from "react";

class WelcomeMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Bharat Kumar"
    };
  }

  updateInput = (event) => {
    this.setState({
      username: event.target.value,
      });
  };


  render() {
    return (
      <React.Fragment>
        <form>
          UserName:{" "}
          <input
            onChange={this.updateInput}
            type="text"
            placeholder="username"
            value={this.state.username}
          />
          <h2>{this.state.username}</h2>
        </form>
      </React.Fragment>
    );
  }
}

export default WelcomeMessage;
