import React from 'react';
import './App.css';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

class App extends React.Component {

  render() {
    return (
      <>
        <h1>Otter App</h1>
        <MessageList />
        <MessageForm />
      </>
    )
  }

}


export default App;
