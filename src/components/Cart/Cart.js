import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)

    let total = 0;
    cart.map(product => {
        total = total + product.price
    })

    let shipping = 0;
    if (total > 35){
        shipping = 0;
    } else if(total > 15){
        shipping = 4.99;
    } else if (total>0){
        shipping = 12.99;
    }

    const tax = total/10;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }
    return (
        <div>
            <h3>Cart Summery: {cart.length}</h3>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total Price: {formatNumber(total + shipping + tax)}</p>
        </div>
    );
};

export default Cart;
