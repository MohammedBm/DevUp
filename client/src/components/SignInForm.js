import React from 'react';

function SignInForm(props) {
  const {
    onSubmit = () => {}
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    const {currentTarget} = event;
    const formData = new FormData(currentTarget);
    onSubmit({email: formData.get('email'), password: formData.get('password')});
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input id='email' placeholder='example@example.com' name='email' className='form-control LimitQuarter'/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input placeholder='password gose here' type='password' id='password' name='password' className='form-control LimitQuarter' placeholder='Password'/>
        <small id="emailHelp" className="form-text text-muted">Don't share your password with anyone.</small>
      </div>
      <div>
        <input className='btn btn-outline-primary' type='submit' value='Sign In'/>
      </div>

    </form>

  )
}

export default SignInForm;
