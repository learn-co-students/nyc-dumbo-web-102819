import React, { Component } from 'react';

class Message extends Component {

  render(){

    // if (this.props.functionThing) {
    //   console.log(this.props.functionThing())
    // }
    // console.log(this.props)
    // const message = this.props.content;

    // const content = this.props.content
    const { content, potato, stuff } = this.props

    return (<p>{ content }</p>)
  }

}

export default Message;
