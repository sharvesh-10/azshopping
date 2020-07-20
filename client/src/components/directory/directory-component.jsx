import React from 'react';
import MenuItem from '../menu-items/menu-item-component';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory-selector';
import './directory.scss';
import ParticlesBg from 'particles-bg';
const Directory = ({sections}) => (
   
    <div className='directory-menu'>
         <ParticlesBg type="cobweb" color="#2e20e8"  num={300} bg={true} />
        {sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps}/>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
});
export default connect(mapStateToProps)(Directory);