import React from 'react';

function SignInForm (props) {
  const { onSubmit = () => {} } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const {currentTarget} = event;


    const formData = new FormData(currentTarget);
    onSubmit({
      email: formData.get('email'),
      password: formData.get('password')
    });
  }
  return(
    <form onSubmit={handleSubmit}>
      <div className='input-group'>
        <label htmlFor='email' className='input-group-addon'>Email</label> <br />
        <input id='email'  placeholder='example@example.com'name='email' className='form-control LimitQuarter' />
      </div>
      <br/>
      <div className='input-group'>
        <label htmlFor='password' className='input-group-addon'>Password</label>
        <input  placeholder='password gose here' type='password'id='password' name='password' className='form-control LimitQuarter' />
      </div>

      <br />
      <div>
        <input className='btn btn-outline-primary'type='submit' value='Sign In'/>
      </div>

    </form>

  )
}

export default SignInForm;
