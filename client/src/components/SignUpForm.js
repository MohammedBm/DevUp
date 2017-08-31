import React from 'react';

function SignUpForm (props) {
  const {
    onSubmit = () => {}
  } = props;

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
      <div className='form-group'>
        <label htmlFor='full_name'>Full Name</label>
        <input className='form-control LimitQuarter' placeholder='Hope Austin' id='full_name' name='full_name' />
      </div>
      <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <input id='username' placeholder='LoremIpsumol' name='username' className='form-control LimitQuarter' />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input id='email'  placeholder='example@example.com'name='email' className='form-control LimitQuarter' />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input  placeholder='Password' type='password'id='password' name='password' className='form-control LimitQuarter' />
      </div>
      <div className='form-group'>
        <label htmlFor='password_confirmation'>Password</label>
        <input type='password' placeholder='Password Confirmation' className='form-control LimitQuarter 'id='password_confirmation' name='password_confirmation' />
      </div>
      <div>
        <input className='btn btn-outline-primary'type='submit' value='Sign Up'/>
      </div>

    </form>
  )
}

export default SignUpForm;
