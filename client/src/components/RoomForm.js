import React from 'react';

function RoomForm(props) {
  const {
    onSubmit = () => {}
  } = props

  const handleSubmit = event =>{
    event.preventDefault();
    const {currentTarget} = event;

    const formData = new FormData(currentTarget);
    onSubmit({
      title: formData.get('title'),
      creater: formData.get('creater'),
      activity: formData.get('activity'),
      game: formData.get('game'),
      time: formData.get('time'),
      limit: formData.get('limit')
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor = 'title'>Title</label><br />
        <input id='title' name='title'/>
      </div>
      <div>
        <label htmlFor = 'creater'>Username</label><br />
        <input id='creater' name='creater'/>
      </div>
      <div>
        <label htmlFor = 'game'>Language</label><br />
        <input maxLength='20' id='game' name='game'/>
      </div>
      <div>
        <label htmlFor = 'activity'>Activity</label><br />
        <input id='activity' name='activity'/>
      </div>
      <div>
        <label htmlFor = 'time'>Time</label><br />
        <input id='time' name='time'/>
      </div>
      <div>
        <label htmlFor = 'limit'>Player Count</label><br />
        <input type = 'number'id='limit' name='limit'/>
      </div>

      <br />
      <div>
        <input className = 'btn-outline-primary btn'type='submit' value='Submit'/>
      </div>

    </form>
  )

}

export default RoomForm;
