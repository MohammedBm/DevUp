import React, {Component} from 'react';

class Message extends Component {
  render() {
    return (
      <div>
        <strong>{this.props.username}</strong>:{this.props.message}
      </div>
    )
  }
}

export default Message
