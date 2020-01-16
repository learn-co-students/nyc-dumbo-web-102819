import React from 'react';

class MessageForm extends React.Component {

  state = {
    content: ""
  }

  onSubmit = event => {
    event.preventDefault()
    // console.log(this.state)
    this.props.createMessage(this.state.content)
    this.setState({
      content: ""
    })
  }

  onChange = event => {
    // console.log(event.target)
    // console.log(event.target.value)
    this.setState({
      content: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <ul>
          <li>
            <label htmlFor="message-content">Content:</label>
            <input type="text"
                    placeholder="Content goes here!"
                    value={ this.state.content }
                    onChange={ this.onChange }
                    name="content"
                    id="message-content" />
          </li>
          <li>
            <input type="submit" />
          </li>
        </ul>
      </form>
    )
  }

}


export default MessageForm;
