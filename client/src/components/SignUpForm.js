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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='full_name'>Full Name</label> <br />
        <input id='full_name' name='full_name' />
      </div>
      <div>
        <label htmlFor='username'>Username</label> <br />
        <input id='username' name='username' />
      </div>
      <div>
        <label htmlFor='email'>Email</label> <br />
        <input id='email' name='email' />
      </div>
      <div>
        <label htmlFor='password'>Password</label> <br />
        <input type='password' id='password' name='password' />
      </div>
      <div>
        <label htmlFor='password_confirmation'>Password</label> <br />
        <input type='password' id='password_confirmation' name='password_confirmation' />
      </div>

      <div>
        <input type='submit' value='Sign Up'/>
      </div>

    </form>
  )
}

export default SignUpForm;
