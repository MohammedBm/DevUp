import React, {Component} from 'react';
import {Room} from '../../utls/requests';
import RoomDetails from '../RoomDetails';

class RoomShowPage extends Component{
  constructor(props){
    super(props);
    this.state={
      room: {}
    }
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    Room.get(id).then(room=>this.setState({room}))
  }

  render(){
    const {room} = this.state;
    return(
      <div className='RoomShowPage'>
        <RoomDetails {...this.state.room}/>
      </div>
    )
  }

}

export default RoomShowPage;
