import React from 'react';
import './header-component-styles.scss'
import { Link } from 'react-router-dom';
/*import { ReactComponent as Logo } from "../../assets/supermarket.svg";*/
import logo from '../../assets/logo1.png'
import {auth} from '../../firebase/firebase-utils';



const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img src={logo} alt="logo"/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN  </Link>
            }
        </div>
    </div>

)

export default Header;