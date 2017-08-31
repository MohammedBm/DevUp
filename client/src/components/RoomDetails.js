import React, {Component} from 'react';
import firebase from 'firebase';
import MessageList from './ChatComponents/MessageList';
import Header from './ChatComponents/Header';
import MessageBox from './ChatComponents/MessageBox';
import jwtDecode from 'jwt-decode';
import _ from 'lodash';

class RoomDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    };
  }

  componentWillReceiveProps(props) {
    console.log('ere', props)
    if (!props.id)
      return;
    let app = firebase.database().ref('messages').child(props.id) // messages/987987439801372490 : {message, username}
    app.on('value', snapshot => {
      console.log('new message', snapshot.val())
      this.setState({
        messages: this.getData(snapshot.val())
      });
    });
  }

  getData(values) {
    let messagesVal = values;
    return _(messagesVal).keys().map(messageKey => {
      let cloned = _.clone(messagesVal[messageKey]);
      cloned.key = messageKey;
      return cloned;
    }).value();
  }

  get currentUser() {
    const jwt = window.localStorage.getItem('jwt');
    return jwt && jwtDecode(jwt);
  }

  sendMessage = (message, username) => {
    console.log(message, username)
    firebase.database().ref('/messages').child(this.props.id).push({message, username});
  }

  render() {
    const {
      id,
      title,
      game,
      creater,
      activity,
      limit,
      time,
      comments = [],
      room_users = [],
      author = [],
      author_username,
      users = []
    } = this.props;

    const {currentUser} = this;
    const {messages} = this.state
    return (
      <div className='RoomDeatils'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-s-12'>
            <h4>
              <strong key='123'>{title}</strong>
            </h4>
            <div>
              <strong>Language:</strong>
              {game}</div>
            <div>
              <strong>Username:</strong>
              {creater}</div>
            <div>
              <strong>Activity:</strong>
              {activity}</div>
            <div>
              <strong>Time:</strong>
              {time}</div>
            <div>
              <strong>Player Limit:</strong>
              {users.length}/{limit}</div>
            <hr/>
            <h3>Users</h3>
            <ul key="12" className='RoomUsersList'>
              {users.map(user => (
                <li key={user.id}>
                  {user.username}
                </li>
              ))
}
            </ul>
            {/* <hr/> */}
            {/* <h3>Comments</h3> */}
            {/* <div className='commentBox'>
            <ul className='CommentList'>
              {
                comments.map(
                  comment =>(
                    <li key={comment.id}>
                      <p className='commentMessage'><strong>{comment.author_username}</strong>: {comment.body}</p>
                      <hr />
                    </li>
                  )
                )
              }
            </ul>
          </div> */}
          </div>
          <div className='col-lg-6 col-md-6 col-s-12'>
            <h2 >Chat Room</h2>
            <div className='chatBox'>
              <div className="columns">
                <div className="column is-3"></div>
                <div className="column is-6">
                  <MessageList {...{messages}}/>
                </div>
              </div>
              <div className="columns">
                <div className="column is-3"></div>
              </div>
            </div>
            <div className="column is-6">
              <MessageBox sendMessage={this.sendMessage} {...{currentUser}}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RoomDetails;
