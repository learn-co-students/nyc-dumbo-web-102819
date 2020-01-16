import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {
  state = {
    hogs: [],
    greasedOnly: false,
    sortedByName: false,
    sortByWeight: false
  };

  componentDidMount() {
    this.setState({ hogs: hogs });
  }

  greasedHandler = () => {
    this.setState({ greasedOnly: !this.state.greasedOnly });
  };

  sortByNameHandler = () => {
    this.setState({
      sortedByName: !this.state.sortedByName,
      sortByWeight: false
    });
  };

  sortByWeightHandler = () => {
    this.setState({
      sortByWeight: !this.state.sortByWeight,
      sortedByName: false
    });
  };

  renderedHogs = () => {
    let hogs = [...this.state.hogs];

    if (this.state.greasedOnly) {
      hogs = hogs.filter(hog => {
        return hog.greased;
      });
    }

    if (this.state.sortedByName) {
      hogs = hogs.sort((hogA, hogB) => {
        return hogA.name.localeCompare(hogB.name);
      });
    }

    if (this.state.sortByWeight) {
      hogs = hogs.sort((hogA, hogB) => {
        return hogB.weight - hogA.weight;
      });
    }

    return hogs;
  };

  render() {
    return (
      <div className="App">
        <Nav
          greasedHandler={this.greasedHandler}
          sortByNameHandler={this.sortByNameHandler}
          sortByWeightHandler={this.sortByWeightHandler}
        />
        <HogContainer hogs={this.renderedHogs()} />
      </div>
    );
  }
}

export default App;
