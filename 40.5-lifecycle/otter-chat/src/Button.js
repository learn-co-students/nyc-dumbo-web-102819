import React, { Component } from 'react';

class Button extends Component {

  // onClick(){
  //   this.props.incrementLikes(3)
  // }

  render() {
    return (
      <button onClick={ event => this.props.incrementLikes(this.props.messageId) } >
        { this.props.numberOfLikes } Likes
      </button>
    );
  }

}

export default Button;
