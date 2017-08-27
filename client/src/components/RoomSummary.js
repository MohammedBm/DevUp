import React from 'react';
import {Link} from 'react-router-dom'

function RoomSummary(props) {
  const {id, title, game, creater, activity, limit, time} = props;

  return(
    <div className='RoomSummary row'>
        <div className='col-6'>
            <Link to={`/rooms/${id}`}><strong>{title}</strong></Link>
            <div>Language: {game}</div>
            <div>Username: {creater}</div>
            <div>Activity: {activity}</div>
            <div>Time: {time}</div>
            <div>Player Limit: {limit}</div>
            <button className='btn btn-outline-primary'>Join</button>
        </div>
      </div>
  )
}

export default RoomSummary;
