import React, { Component } from "react";

class About extends Component {
  state = {
    Image: "http://www.asc-csa.gc.ca/images/satellites/cubesat/cubesat-og.jpg",
  };

  render() {
    return (
      <div className="pagediv">
        <img src={this.state.Image} alt="cubesat" />
      </div>
    );
  }
}

export default About;
