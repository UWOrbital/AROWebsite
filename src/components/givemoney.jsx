import React, { Component } from "react";

class GiveMoney extends Component {
  state = {
    Image: "https://c.tenor.com/oCxcur4d32wAAAAM/squidward-spare-change.gif",
  };

  render() {
    return (
      <div className="pagediv">
        <img src={this.state.Image} alt="give money gif" />
      </div>
    );
  }
}

export default GiveMoney;
