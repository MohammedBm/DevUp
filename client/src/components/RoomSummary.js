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
    return !!this.state.room_users.find(user => user.user_id === this.state.userId)
  }

  curretUSerHasLeave = ()=>{
    return this.state.room_users.find(user => user.user_id === this.state.userId).id
  }

render(){
  let style = {
    div:{
      width: '30rem',
      marginBottom: '10px',
      marginRigth: '10px',
      marginLeft: '10px'
    }
  }

    return(

    <div className='RoomSummary'>
        <div className="card " style={style.div}>
          <div className="card-body">
            <Link to={`/rooms/${this.state.id}`}><strong>{this.state.title}</strong></Link>

            <h6 className="card-subtitle mb-2 text-muted">{this.state.game} room id=>{this.state.id}</h6>

            <p className="card-text"><strong>Activity:</strong> {this.state.activity}.</p>

            <p className="card-text"><strong>Time:</strong> {this.state.time}</p>

            <p className="card-text"><strong>Player Limit:</strong> {this.state.users.length}/{this.state.limit}</p>

            <p className="card-text"><strong>Craeter:</strong> {this.state.author.username} id =>{this.state.author.id} </p>
            {
              this.currentUserHasJoined()
              ? (
                <UnjoinedButton handleJoin={this.handleJoin} roomUserId={this.curretUSerHasLeave()} />
              ):(
                <JoinButton roomId={this.state.id} handleJoin={this.handleJoin} />
              )
            }

            <Link to={`/rooms/${this.state.id}`} className='card-link btn-outline-primary btn'>Open</Link>
          </div>
        </div>
  </div>
  )
}
}

export default RoomSummary;
