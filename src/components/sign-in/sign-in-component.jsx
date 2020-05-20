import React from 'react';
import FormInput from "../form-input/form-input-component";
import CustomButton from '../custom-button/custom-button-component';
import './sign-in-styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password: ''
        };
    }

    handleSubmit = event =>{
        event.preventDefault();
    };

    handleChange = event =>{
        const {value,name} = event.target;

        this.setState({[name]: value})
    };
    render(){
        
        return(
            <div className='sign-in'>
                <h1>I ALREADY HAVE AN ACCOUNT</h1>
                <span><h2>Sign in with E-Mail</h2></span>
                <form onSubmit={this.handleSubmit}>
                <label><h3>E-MAIL</h3></label>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="email"
                        required 
                    />
                      <label><h3>PASSWORD</h3></label>
                    <FormInput 
                        name="password"
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label="password"
                        required 
                    />
                  
                    <CustomButton type="submit">SignIn</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;