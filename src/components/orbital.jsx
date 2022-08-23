import React, { Component } from "react";

class Orbital extends Component {
  state = {
    Image: "https://c.tenor.com/yu4yJBMcidMAAAAd/space.gif",
  };

  render() {
    return (
      <div className="pagediv">
        <img src={this.state.Image} alt="space gif" />
      </div>
    );
  }
}

export default Orbital;
