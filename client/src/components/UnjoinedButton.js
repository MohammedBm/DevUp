import React, {Component} from 'react'
import { Button, Popover, PopoverTitle, PopoverContent } from 'reactstrap';
import {Room, Member} from '../utls/requests'
import jwtDecode from 'jwt-decode';


class UnjoinedButton extends Component{
  constructor(props){
    super(props)
    this.state = {
      popoverOpen: false
    };

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
      <button  onClick={UnjoinRoom} className="card-link btn-outline-danger btn">Leave!</button>
    )
  }

}

export default UnjoinedButton;
