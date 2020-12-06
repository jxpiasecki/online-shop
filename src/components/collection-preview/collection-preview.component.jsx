import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items && items
                .filter(
                    (item, idx) => idx < 4
                )
                .map(
                    ({id, ...item}) => <CollectionItem key={id} {...item}/>
                )
            }
        </div>
    </div>
)

export default CollectionPreview;
