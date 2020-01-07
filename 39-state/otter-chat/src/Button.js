import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <button onClick={ this.props.handleLike } >{this.props.numberOfLikes} Likes</button>
    );
  }

}

export default Button;
