import React from 'react';
import './header-component-styles.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/supermarket.svg";
/*import logo from '../../assets/logo1.png'*/
import {auth} from '../../firebase/firebase-utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropDown from '../cart-dropdown/cart-dropdown-component';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropDown/>
        }
        
    </div>

)

const mapStateToProps = ({user: {currentUser},cart: { hidden }}) => ({
    currentUser,
    hidden
});
export default connect(mapStateToProps)(Header);