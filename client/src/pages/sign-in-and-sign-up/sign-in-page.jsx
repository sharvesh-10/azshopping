import React from 'react';
import SignUp from '../../components/sign-up/sign-up-component';
import SignIn from '../../components/sign-in/sign-in-component';
import ParticlesBg from 'particles-bg';
import './sign-in-page-styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <ParticlesBg type="cobweb" color="#2e20e8"  num={100} bg={true} />
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;