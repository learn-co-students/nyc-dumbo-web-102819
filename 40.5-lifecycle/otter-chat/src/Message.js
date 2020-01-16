import React from 'react';
import Button from './Button'

class Message extends React.Component {

  // state = {
  //   numberOfLikes: 0
  // }

  // handleLike = (evt) => {
  //   this.setState({
  //     numberOfLikes: this.state.numberOfLikes + 1
  //   })
  // }

  render(){
    let {content, id } = this.props
    return (<li>
      <span>{ content }</span>

      <Button
        numberOfLikes={this.props.numberOfLikes}
        handleLike={this.handleLike}
        incrementLikes={ this.props.incrementLikes }
        messageId={ id }
      />

    </li>)
  }

}

Message.defaultProps = {
  content: "This will become the default props if someone forgets to pass down props to Message",
}

export default Message
