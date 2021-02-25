import React from "react";

export default class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0,
  };

  handleClick = () => {
    this.setState((prevState) => {
      return {
        timesClicked: prevState.timesClicked + 1,
      };
    });
  };

  render() {
    return (
      <button label="Times Clicked" onClick={this.handleClick}>
        {this.state.timesClicked}
      </button>
    );
  }
}
