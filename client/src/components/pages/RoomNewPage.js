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
    const {errors} = this.state
    return (
      <div className='RoomNewPage'>
        <h2>New Room</h2>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <RoomForm onSubmit={this.createRoom}/>
      </div>
    )
  }
}

export default RoomNewPage;
