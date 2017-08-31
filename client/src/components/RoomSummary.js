import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import JoinButton from './JoinButton';
import jwtDecode from 'jwt-decode';
import UnjoinedButton from './UnjoinedButton'

class RoomSummary extends Component {
  constructor(props){
    super(props)
    this.state={...props, userId:this.currentUser.id}
  }

  handleJoin = (room)=>{
    console.log('handleJoin');
    console.log(room);
    this.setState({...room})
  }

  get currentUser() {
    const jwt = window.localStorage.getItem('jwt');
    return jwt && jwtDecode(jwt);
  }

  currentUserHasJoined = ()=>{
     let userInRoom = this.state.room_users.find(user => user.user_id === this.state.userId)
     console.log(userInRoom);
     return userInRoom ?(userInRoom.id):(false)
  }

  currentUserHasLeft = ()=>{
    return this.state.room_users.find(user => user.user_id === this.state.userId)
  }

render(){
  let style = {
    div:{
      width: '30rem',
      marginBottom: '10px',
      marginRigth: '13px',
      marginLeft: '14px'
    }
  }

    let button = null
    console.log('has joined',this.currentUserHasJoined());
    console.log(`has left:`,this.currentUserHasLeft());
    if(this.currentUserHasJoined()){
      button = <UnjoinedButton handleJoin={this.handleJoin} roomUserId={this.currentUserHasJoined()} />
    }else if (this.state.users.length === this.state.limit) {
      button = <button className='btn btn-danger card-link'>Full</button>
    }else{
      button = <JoinButton roomId={this.state.id} handleJoin={this.handleJoin} />
    }

    return(
      <div className='RoomSummary'>
        <div className="card card" style={style.div}>
          <div className="card-body">
            <Link to={`/rooms/${this.state.id}`}><strong>{this.state.title}</strong></Link>
            <h6 className="card-subtitle mb-2 text-muted">{this.state.game} room id=>{this.state.id}</h6>
            <p className="card-text"><strong>Activity:</strong> {this.state.activity}.</p>
            <p className="card-text"><strong>Time:</strong> {this.state.time}</p>
            <p className="card-text"><strong>Player Limit:</strong> {this.state.users.length}/{this.state.limit}</p>
            <p className="card-text"><strong>Creater:</strong> {this.state.author.username} id =>{this.state.author.id} </p>
            {button}
            <Link to={`/rooms/${this.state.id}`} className='card-link btn-outline-primary btn'>Open</Link>
          </div>
        </div>
    </div>
    )
  }
}

export default RoomSummary;
