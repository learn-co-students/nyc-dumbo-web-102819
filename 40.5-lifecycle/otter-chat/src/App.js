import React from 'react';
import './App.css';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import uuid from 'uuid'

class App extends React.Component {

  state = {
    messages: []
  }

  incrementLikes = id => {
    console.log(id)
    // const id = 3
    // console.log("hi mom")
    this.setState({
      messages: this.state.messages.map(message => {
        if (message.id !== id){
          return message
        }
        else {
          return {
            ...message,
            likes: message.likes + 1
          }
        }
      })
    })


  }

  componentDidMount(){
    fetch("http://localhost:3000/messages")
      .then(res => res.json())
      .then(data => {
        this.setState({
          messages: data
        })
      })
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
    // console.log("i rendered")
    return (
      <>
        <h1>Otter Chat</h1>
        <MessageList messages={ this.state.messages } incrementLikes={ this.incrementLikes } />
        <MessageForm createMessage={ this.createMessage } />
      </>
    )
  }

}


export default App;
