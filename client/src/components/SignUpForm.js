import React from 'react';

function SignUpForm (props) {
  const { onSubmit = () => {} } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const {currentTarget} = event;

    const formData = new FormData(currentTarget);
    onSubmit({
      full_name: formData.get('full_name'),
      username: formData.get('username'),
      email: formData.get('email'),
      password_digest: formData.get('password')
    });
  }

  return(
    <form onSubmit={handleSubmit} >
      <div className='input-group'>
        <label className='input-group-addon'htmlFor='full_name'>Full Name</label> <br />
        <input className='form-control LimitQuarter' placeholder='Hope Austin' id='full_name' name='full_name' />
      </div>
      <br />

      <div className='input-group'>
        <label htmlFor='username' className='input-group-addon'>Username</label> <br />
        <input id='username' placeholder='LoremIpsumol' name='username' className='form-control LimitQuarter' />
      </div>
      <br />
      <div className='input-group'>
        <label htmlFor='email' className='input-group-addon'>Email</label> <br />
        <input id='email'  placeholder='example@example.com'name='email' className='form-control LimitQuarter' />
      </div>

      <br />
      <div className='input-group'>
        <label htmlFor='password' className='input-group-addon'>Password</label> <br />
        <input  placeholder='password gose here' type='password'id='password' name='password' className='form-control LimitQuarter' />
      </div>
      <br/>
      <div className='input-group'>
        <label htmlFor='password_confirmation' className='input-group-addon'>Password</label> <br />
        <input type='password' className='form-control LimitQuarter 'id='password_confirmation' name='password_confirmation' />
      </div>
      <br/>
      <div>
        <input className='btn btn-outline-primary'type='submit' value='Sign Up'/>
      </div>

    </form>
  )
}

export default SignUpForm;
