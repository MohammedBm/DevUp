import React, {Component} from 'react';
import trim from 'trim';

class MessageBox extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      message: ''
    };
  }

  onChange(e){
    this.setState({
      message: e.target.value
    });
  }
  onKeyup(e){
    if(e.keyCode === 13 && trim(e.target.value) !== ''){
      e.preventDefault();
      this.props.sendMessage(trim(e.target.value), this.props.currentUser.username)
      this.setState({
        message: ''
      });
    }
  }

  render() {
    return (
      <form>
        <textarea
            className="form-control messageInput"
            placeholder="Type a message"
            rows='3'
            cols='1000'
            onChange={this.onChange}
            onKeyUp={this.onKeyup}
            value={this.state.message}>
          </textarea>
      </form>
    )
  }
}

export default MessageBox
