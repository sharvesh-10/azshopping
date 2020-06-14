import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import './contact-styles.scss';

const Contact = ({currentUser}) => (
    <div>   
    {
        currentUser?(
            <div>
                <h1>user signed in</h1>
            </div>) : (
            <div>
                <h1>please sign in</h1>
            </div>
        )
    }
    </div>
);
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
});
export default connect(mapStateToProps)(Contact);