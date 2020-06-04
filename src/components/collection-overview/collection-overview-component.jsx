import React from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import './collection-overview-styles.scss';
import {selectCollections} from '../../redux/shop/shop-selector';
import PreviewCollection from '../preview/preview-component';


const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(({id, ...otherCollectionProps}) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
    </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});
export default connect(mapStateToProps)(CollectionsOverview);
