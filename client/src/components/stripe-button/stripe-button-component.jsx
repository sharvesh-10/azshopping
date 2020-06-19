import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100 ;
    const publishableKey =  'pk_test_51GqiFoL2z91Vsf5UnZatDE6S64qTKKrYRyPJiKzA8YYQ5qDQGptnID5Dm4HLEN6q3bbF7QT8xje41xd2Jza3z2lw00NT89VaVn';
    const onToken = token =>{
            axios({
              url: 'payment',
              method: 'post',
              data: {
                amount: priceForStripe,
                token: token
              }
            })
              .then(response => {
                alert('succesful payment');
              })
              .catch(error => {
                console.log('Payment Error: ', error);
                alert(
                  'There was an issue with your payment! Please make sure you use the provided credit card.'
                );
              });
    }
    return(
        <StripeCheckout 
            label='pay now'
            name='az-shopping Ltd.'
            billingAddress
            shippingAddress
            currency='INR'
            image='https://www.pngitem.com/pimgs/m/9-93854_shopping-cart-computer-icons-online-shopping-clip-art.png'
            description={`Your total is ₹${price}`}
            amount={priceForStripe}
            panelLabel='PAY NOW'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;