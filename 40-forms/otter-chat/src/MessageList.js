import React from 'react';
import Message from './Message';

class MessageList extends React.Component {
  render(){
    return (<ol>
              <Message content="Ork!" />
              <Message />
              <Message content="Ork!"/>
              <Message content="Bork bork" />
              <Message content="Hello." />
            </ol>)
  }
}

export default MessageList