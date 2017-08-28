import React, {Component} from 'react';
import {Token,User} from '../../utls/requests';
import SignUpForm from '../SignUpForm'


class SignInPage extends Component{
  constructor(props){
    super(props);
  }

  createUser = (params) =>{
    const {onSignIn = () => {} } = this.props

    User
      .post(params)
      .then(({jwt})=>{
        window.localStorage.createItem('jwt',jwt);

        this.props.history.push('/');
        onSignIn()
      })
  }


  render(){
    return(
      <div className='SignInPage'>
        <h2>Sign In</h2>
        <SignUpForm onSubmit={this.createUser} />
      </div>
    )
  }
}

export default SignInPage;
