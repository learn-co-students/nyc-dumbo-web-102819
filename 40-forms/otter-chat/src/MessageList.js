import React from 'react';
import Message from './Message';

class MessageList extends React.Component {


  render(){

    const messageComponents 
            = this.props.messages.map(message => <Message key={ message.id } content={ message.content }  />)

    /*[
      <Message content="Ork!" />,
      <Message />,
      <Message content="Ork!"/>,
      <Message content="Bork bork" />,
      <Message content="Hello." />,
      <Message content="Hello." />
    ])*/

    // console.log(messageComponents)

    return (<ol>
              {
                messageComponents
              }
            </ol>)
  }
}

export default MessageList