import React, { Component } from "react";

class Hog extends Component {
  state = {
    showInfo: false
  };
  formatName = () => {
    const formattedName = this.props.hog.name
      .toLowerCase()
      .split(" ")
      .join("_");

    return formattedName;
  };

  handleClick = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    const {
      name,
      greased,
      specialty,
      weight,
      "highest medal achieved": medal
    } = this.props.hog;

    return (
      <div className="ui eight wide column">
        <h2>Name: {name}</h2>
        <img
          onClick={this.handleClick}
          src={require(`../hog-imgs/${this.formatName()}.jpg`)}
        />

        {this.state.showInfo ? (
          <div>
            <p>Weight: {weight}</p>
            <p>Specialty: {specialty}</p>
            <p>Greased: {greased ? "True" : "False"}</p>
            <p>Medal: {medal}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Hog;
