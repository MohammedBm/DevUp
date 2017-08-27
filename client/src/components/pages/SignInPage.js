import React, {Component} from 'react';
import {Token} from '../../utls/requests';
import SignInForm from '../SignInForm'


class SignInPage extends Component{
  constructor(props){
    super(props);
  }

  createToken = (params) =>{
    const {onSignIn = () => {} } = this.props

    Token
      .post(params)
      .then(({jwt})=>{
        window.localStorage.setItem('jwt',jwt);

        this.props.history.push('/');
        onSignIn()
      })
  }
  render(){
    return(
      <div className='SignInPage'>
        <h2>Sign In</h2>
        <SignInForm onSubmit={this.createToken} />
      </div>
    )
  }
}

export default SignInPage;
