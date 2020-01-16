import React, { Component } from "react";
import Hog from "./Hog.js";

class HogContainer extends Component {
  render() {
    console.log(this.props.hogs);
    const hogComponents = this.props.hogs.map(hog => {
      return <Hog hog={hog} />;
    });
    return <div className="ui grid container">{hogComponents}</div>;
  }
}

export default HogContainer;
