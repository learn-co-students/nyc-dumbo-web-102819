import React from 'react';
import Button from './Button'

class Message extends React.Component {

  // constructor(){
  //   super()
  //   // `this` -> Instance
  //   this.state = {
  //     numberOfLikes: 100,
  //     name: "Graham"
  //   }
  //   this.handleLike = this.handleLike.bind(this)
  // }

  state = {
    numberOfLikes: 0,
    name: "Eric",
    height: false
  }

  handleLike = (evt) => {
    // this -> instance of the <Message/> component

    // let plainOldJavascriptObject = {
    //   numberOfLikes: 7,
    // }

    // this.setState(plainOldJavascriptObject, () => {
    //     console.log(this.state);
    // })
    // newState = {...oldState, ...plainOldJavascriptObject}

    this.setState({numberOfLikes: this.state.numberOfLikes + 1})

  }

  render(){
    let {content} = this.props
    return (<li>
      <span>{ content }</span>

      <Button
        numberOfLikes={this.state.numberOfLikes}
        handleLike={this.handleLike}
      />

    </li>)
  }

}

Message.defaultProps = {
  content: "This will become the default props if someone forgets to pass down props to Message",
}

export default Message
