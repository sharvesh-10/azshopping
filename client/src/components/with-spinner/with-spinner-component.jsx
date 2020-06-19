import React from 'react';
import {SpinnerOverlay} from './with-spinner-styles';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const WithSpinner = WrappedComponent => {
     const Spinner = ({ isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <Loader type="Circles" color="#00BFFF" height={80} width={80} timeout={100000000} />        
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps}/>
    )
};
    return Spinner;
};

export default WithSpinner;