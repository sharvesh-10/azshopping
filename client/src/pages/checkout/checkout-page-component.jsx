import React from 'react';
import './checkout-page-styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item-component';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart-selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button-component';
import ParticlesBg from 'particles-bg';

const CheckoutPage =({cartItems,total}) =>(
    
    <div className='checkout-page'>
        <ParticlesBg type="cobweb" color="#2e20e8"  num={150} bg={true} />
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem ={cartItem}/>
            ))
        }
        <div className='total'>
            <span>TOTAL:₹{total}</span>
        </div>
        <div className='sample-details'>
            <h3>Sample Payment Card Details</h3>
            <h3>4242 4242 4242 4242 EXP:12/27 CVV:123</h3>
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);