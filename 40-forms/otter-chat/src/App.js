import React from 'react';
import './App.css';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import uuid from 'uuid'

class App extends React.Component {

  state = {
    messages: [
      {
        id: 1,
        content: "Ork!"
      },
      {
        id: 2,
        content: undefined
      },
      {
        id: 3,
        content: "Ork!"
      },
      {
        id: 4,
        content: "Robert bork!"
      },
      {
        id: 5,
        content: "Hello."
      }
    ]
  }

  createMessage = (messageContent) => {
    const messageObject = {
      id: uuid(),
      content: messageContent,
    }
    // this.state.messages.push(argument) // no! directly mutates state
    this.setState({
      messages: [ ...this.state.messages, messageObject ]
    })
  }

  render() {
    return (
      <>
        <h1>Otter App</h1>
        <MessageList messages={ this.state.messages } />
        <MessageForm createMessage={ this.createMessage } />
      </>
    )
  }

}


export default App;
