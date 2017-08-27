import React, {Component} from 'react';
import {Room} from '../../utls/requests';
import RoomForm from '../RoomForm'

class RoomNewPage extends Component {
  constructor(props) {
    super(props);
  }

  createRoom = (room) => {
    Room
      .post(room)
      .then(({id}) => this.props.history.push(`/rooms/${id}`));
  }

  render() {
    return (
      <div className='RoomNewPage'>
        <h2>New Room</h2>
        <RoomForm onSubmit={this.createRoom}/>
      </div>
    )
  }
}

export default RoomNewPage;
