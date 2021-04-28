import React from 'react';
import './Services_lists.css'

export const Services_lists = ({heading, subheading, price}) => {
    return(
        <div className="SerList">
            <p className="hdg">{heading}</p>
            <p className="subhdg">{subheading}</p>
            <p className="prc">{price}</p>
        </div>
    );
}
