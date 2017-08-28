import React from 'react';

function CommentForm (props){
  const {onSubmit = ()=>{}} = props;

  const handleSubmit = event =>{
    event.preventDefault();
    const {currentTarget} = event;

    const formData = new FormData(currentTarget);
    onSubmit({
      comments:{
        body: formData.get('body')
      }
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor = 'body'>Body</label><br />
        <input id='body' name='body'/>
      </div>

      <div>
        <input type='submit' value='Submit'/>
      </div>

    </form>
  )
}

export default CommentForm;
