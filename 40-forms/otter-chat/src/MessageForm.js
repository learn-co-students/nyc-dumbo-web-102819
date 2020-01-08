import React from 'react';

class MessageForm extends React.Component {

  render() {
    return (
      <form>
        <ul>
          <li>
            <label for="message-content">Content:</label>
            <input type="text" 
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
