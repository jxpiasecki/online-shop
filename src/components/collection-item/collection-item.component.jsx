import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({name, imageUrl, price}) => (
    <div className="collection-item">
        <h4>{name}</h4>
        <div className="image" style={{
            backgroundImage: `url(${imageUrl})  `
        }}></div>
        <div className="collection-footer">
            <div className="name">{name}</div>
            <div className="price">PLN {price}</div>
        </div>

    </div>
)

export default CollectionItem;
