import React from 'react';
import './App.css';
import Message from './Message'

class App extends React.Component {

  render() {
    return (
      <>
        <h1>Otter App</h1>
        <ol>
          <Message content="Ork!" />
          <Message />
          <Message content="Ork!"/>
          <Message content="Bork bork" />
          <Message content="Hello." />
        </ol>
      </>
    )
  }

}


export default App;
