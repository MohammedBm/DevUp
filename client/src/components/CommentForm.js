import React from 'react';

function CommentForm(props) {
  const {
    onSubmit = () => {}
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const {currentTarget} = event;

    const formData = new FormData(currentTarget);
    onSubmit({
      comments: {
        body: formData.get('body')
      }
    })
  }

  return (
    <form className='form-inline' onSubmit={handleSubmit}>
      <div className='form-group'>
        <textarea id='body' className='form-control' name='body' placeholder='Comment Here'/>
      </div>
      <div>
        <input type='submit' className='btn btn-primary submitComment' value='Submit'/>
      </div>
    </form>
  )
}

export default CommentForm;
