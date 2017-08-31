import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.messages.map((message, index) => {
          return (
            <div key={index}>
              <div className="Messages">
                <Message message={message.message} username={message.username}/>
                <hr/>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default MessageList
