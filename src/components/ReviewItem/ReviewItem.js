import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name,  quantity, key, price} = props.product
    return (
        <div className="reviewItem">
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price}</p>
            <button onClick={() => props.handleRemoveProduct(key)} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;