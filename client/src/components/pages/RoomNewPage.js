import React, {Component} from 'react';
import {Room} from '../../utls/requests';
import RoomForm from '../RoomForm'

class RoomNewPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      errors:[]
    }
  }

  createRoom = (room) => {
    Room
      .post(room)
      .then(
        (room) =>{ // { id: 2, title: "" }
          // id = 2
          if(room.id){
           this.props.history.push(`/rooms/${room.id}`)
         }else{
           this.setState({errors:room.errors})
         }
      }
    )


  }

  render() {
    return (
      <div className='RoomNewPage'>
        <h1>{this.state.errors}</h1>
        <h2>New Room</h2>
        <RoomForm onSubmit={this.createRoom}/>
      </div>
    )
  }
}

export default RoomNewPage;
