import React from 'react';
import FormInput from "../form-input/form-input-component";
import CustomButton from '../custom-button/custom-button-component';
import { auth,signInWithGoogle} from "../../firebase/firebase-utils";
import './sign-in-styles.scss';
/*import {Redirect} from 'react-router-dom';*/

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password: ''
        };
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {email ,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '',password: ''});
        }catch(error){
            console.log(error.message);
        }
        
    };

    handleChange = event =>{
        const {value,name} = event.target;

        this.setState({[name]: value})
    };
    render(){
        
        return(
            <div className='sign-in'>
                <h2>I ALREADY HAVE AN ACCOUNT</h2>
                <span>Sign in with E-Mail</span>
                <form onSubmit={this.handleSubmit}>
                <label>E-MAIL</label>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="email"
                        required 
                    />
                      <label>PASSWORD</label>
                    <FormInput 
                        name="password"
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label="password"
                        required 
                    />
                    <div className='button'>
                        <CustomButton type="submit">SignIn</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;