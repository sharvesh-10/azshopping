import React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import {auth, createUserProfileDocument} from '../src/firebase/firebase-utils'
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-actions';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user-selectors'
import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop-component';
import Header from './components/header/header-component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-page';
import CheckoutPage from './pages/checkout/checkout-page-component'; 
//import AddItems from './components/add-items/add-items-component';
import {GlobalStyle} from './global-styles';
import Footer from './components/footer/contact-componen';
class App extends React.Component{

  unsubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async userAuth => {
       if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapshot => {
            setCurrentUser({
                id: snapshot.id,
                ...snapshot.data()
            });
          });
       }
    
         setCurrentUser(userAuth); 
       
    });
    
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route 
          exact 
          path='/signin' 
          render = {() => this.props.currentUser ? (<Redirect to='/'/>) 
            : (<SignInAndSignUpPage/>) } 
        />
        {/*<Route path='/additems' component={AddItems}/>*/}
      </Switch>
      <Footer/>
    </div>
  );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser 
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
