import React from "react";
import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button-component'
const AddItems = () => (
    <div className='sign-up'>
        <h2 className='title'>WELCOME ADMIN!!!</h2>
        <span>ADD ITEMS</span>
        <form className='sign-up-form'>
            <FormInput
                type='text'
                name='id'
                value=""
                label='Id'
                required 
            />  
            <FormInput
                type='text'
                name='imageUrl'
                value=""
                label='ImageUrl'
                required 
            />
            <FormInput
                type='text'
                name='name'
                value=""
                label='Name'
                required 
            />
            <FormInput
                type='text'
                name='price'
                value=""
                label='Price'
                required 
            />
            <FormInput
                type='text'
                name='title'
                value=""
                label='Title'
                required 
            />
            <CustomButton type='submit'>ADD-ITEM</CustomButton>
        </form>
    </div>
);

export default AddItems;