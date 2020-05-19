import React from 'react';

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
                <h2>I ALREADY HAVE AN ACCOUNT</h2>
                <span>Sign in with E-Mail</span>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" value={this.state.email} onChange={this.handleChange} required />
                    <label>E-MAIL</label>
                    <input 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        required 
                    />
                    <label>PASSWORD</label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default SignIn;