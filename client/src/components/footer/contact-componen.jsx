import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'; 
import {selectCurrentUser} from '../../redux/user/user-selectors';
import './contact-styles.scss';

const Footer = ({currentUser}) => (
    <div className='footer'>   
        <div className='options1'>
        {
            currentUser?(
            <h3 className='option'>Logged in as {currentUser.email}</h3>
            ) : (
                <h3 className='option'>please sign in</h3>
            )
        }
        </div>
        <div className='options2'><h3 className='option'>©Sharvesh React az-shopping.Ltd</h3></div>
    </div>
);
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
});
export default connect(mapStateToProps)(Footer);