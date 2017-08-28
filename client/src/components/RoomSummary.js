import React from 'react';
import {Link} from 'react-router-dom'

function RoomSummary(props) {
  const {id, title, game, creater, activity, limit, time,author=[],users = []} = props;

  let style = {
    div:{
      width: '30rem',
      marginBottom: '10px'
    }
  }


  return(
    <div className='RoomSummary'>
      <div className='row'>
        <div className="card col-6" style={style.div}>
          <div className="card-body">
            <Link to={`/rooms/${id}`}><strong>{title}</strong></Link>
            <h6 className="card-subtitle mb-2 text-muted">{game}</h6>
            <p className="card-text"><strong>Activity:</strong> {activity}.</p>
            <p className="card-text"><strong>Time:</strong> {time}</p>
            <p className="card-text"><strong>Devs Limit:</strong> {users.length}/{limit}</p>
            <p className="card-text"><strong>Craeter:</strong> {author.username}  </p>
            <a  className="card-link btn-outline-primary btn">Join</a>
            <Link to={`/rooms/${id}`} className='card-link btn-outline-primary btn'>Open</Link>
          </div>
        </div>
      </div>

      </div>
  )
}

export default RoomSummary;
