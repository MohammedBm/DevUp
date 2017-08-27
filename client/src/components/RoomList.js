import React ,{Component} from 'react';
import RoomSummary from './RoomSummary';

function RoomList (props){
  const { rooms = [] } = props;

  return (
    <div className='RoomList'>
      {
        rooms.map(
          room => <RoomSummary key={room.id} {...room}/>
        )
      }
    </div>
  )
}

export default RoomList;
