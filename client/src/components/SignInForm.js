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
      <div>
        <label htmlFor='email'>Email</label> <br />
        <input type='email' id='email' name='email' />
      </div>

      <div>
        <label htmlFor='password'>Password</label> <br />
        <input type='password' id='password' name='password' />
      </div>

      <div>
        <input type='submit' value='Sign In'/>
      </div>

    </form>

  )
}

export default SignInForm;
