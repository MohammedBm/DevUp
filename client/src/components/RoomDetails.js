import React from 'react';

function RoomDetails(props){
  const {id, title, game, creater, activity, limit, time, comments=[],room_users=[],author=[], author_username, users = []} = props;


  return (
    <div className='RoomDeatils'>
          <div>
            <strong>{title}</strong>
            <div>Game: {game}</div>
            <div>Username: {creater}</div>
            <div>Activity: {activity}</div>
            <div>Time: {time}</div>
            <div>Devs Limit: {users.length}/{limit}</div>
            <hr/>
            <h3>Users</h3>
              <ul className='RoomUsersList'>
                {
                  users.map(
                    user =>(
                      <li key={user.id}>
                        {user.username}
                      </li>
                    )
                  )
                }
              </ul>
            <hr/>
            <h3>Comments</h3>
              <ul className='CommentList'>
                {
                  comments.map(
                    comment =>(
                      <li key={comment.id}>
                        <p>{comment.body}</p>
                        <p>{comment.author_username}'s comment </p>
                        <hr />
                      </li>
                    )
                  )
                }
              </ul>

          </div>
    </div>
  )
}

export default RoomDetails;
