import React from 'react';
import './header-component-styles.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/supermarket.svg";
/*import logo from '../../assets/logo1.png'*/
import {auth} from '../../firebase/firebase-utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropDown from '../cart-dropdown/cart-dropdown-component';
import {createStructuredSelector} from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { selectCurrentUser } from '../../redux/user/user-selectors';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            {
                currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className='option' to='/signin'>SIGN IN</Link>
            }
            {
                currentUser ? ( currentUser.email === "sharvesh.shark@gmail.com" ?(<div className='option'>ADMIN</div>): null) : null
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropDown/>
        }
        
    </div>

)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);