import React, {Component} from 'react';
import {Room} from '../../utls/requests'
import RoomList from '../RoomList'
class RoomIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    }
  }
  componentDidMount() {
    Room.getRooms().then(rooms => this.setState({rooms}))
  }

  render(){
    return(
      <div className='RoomIndexPage'>

        <h2>Rooms</h2>
        <RoomList rooms={this.state.rooms} />
      </div>
    )
  }
}

export default RoomIndexPage
