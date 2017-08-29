import React ,{Component} from 'react';
import RoomSummary from './RoomSummary';

function RoomList (props){
  const { rooms = [] } = props;

  return (
    <div className='RoomList'>
      <div className='row'>
      {
        rooms.map(
          room => <RoomSummary key={room.id} {...room}/>
        )
      }
    </div>
    </div>
  )
}

export default RoomList;
