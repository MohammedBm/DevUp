import React, {Component} from 'react';
import {Token,User} from '../../utls/requests';
import SignUpForm from '../SignUpForm'

class SignUpPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      isSignedIn: false
    };
  }

  createUser = (params) =>{
    const {onSignIn = () => {} } = this.props
    User
      .post(params)
      .then(({jwt})=>{
        window.localStorage.setItem('jwt',jwt);
        this.props.history.push('/');
        onSignIn()
      })
  }

  render(){
    return(
      <div className='SignUpPage'>
        <h2>Sign Up</h2>
        <SignUpForm onSubmit={this.createUser} />
      </div>
    )
  }
}

export default SignUpPage;
