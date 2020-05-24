import React from 'react';
import { Switch,Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop-component';
import Header from './components/header/header-component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-page'; 
import {auth, createUserProfileDocument} from '../src/firebase/firebase-utils'
//import SignIn from './components/sign-in-component/sign-in-component'


const HatsPage =()=>(
  <div>
    <h1>HATS PAGE is open</h1>
  </div>
);

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth => {
       if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapshot => {
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            });
         });
         
       }
       else{
         this.setState({
           currentUser: userAuth
         }); 
       }
       
    });
    
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/sigNin' component={SignInAndSignUpPage}/>
        {/*<Route path='/s' component={SignIn} />*/}
      </Switch>
    </div>
  );
  }
}

export default App;
