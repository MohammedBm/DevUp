import React, {Component} from 'react'
import {Room, Member} from '../utls/requests'
import jwtDecode from 'jwt-decode';


class UnjoinedButton extends Component{
  constructor(props){
    super(props)

  }

  UnjoinRoom = ()=>{
    const {roomUserId} = this.props

    Member
      .delete(roomUserId)
      .then((room)=>{
        // this.props.history.push('/');
        this.props.handleJoin(room);
        })

  }


  get currentUser() {
    const jwt = window.localStorage.getItem('jwt');
    return jwt && jwtDecode(jwt);
  }

  render(){
    const {UnjoinRoom} = this
    return(
      <a  onClick={UnjoinRoom} className="card-link btn-outline-primary btn">Leave!</a>
    )
  }

}

export default UnjoinedButton;
