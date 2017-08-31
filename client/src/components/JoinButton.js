import React, {Component} from 'react'
import {Room, Member} from '../utls/requests'
import jwtDecode from 'jwt-decode';

class JoinButton extends Component {
  constructor(props) {
    super(props)
  }

  JoinRoom = () => {
    const {currentUser} = this;
    const {roomId} = this.props
    let userId = currentUser.id
    console.log(`room id is ${roomId}`)
    console.log(`current user id ${userId}`);

    Member.post(userId, roomId).then((room) => {
      // this.props.history.push('/');
      this.props.handleJoin(room);
    })
  }

  get currentUser() {
    const jwt = window.localStorage.getItem('jwt');
    return jwt && jwtDecode(jwt);
  }

  render() {
    const {JoinRoom} = this
    const {roomId} = this;
    const {currentUser} = this;

    return (
      <button onClick={JoinRoom} className="card-link btn-outline-primary btn">Join!</button>
    )
  }
}

export default JoinButton;
