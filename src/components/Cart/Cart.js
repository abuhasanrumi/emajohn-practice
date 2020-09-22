import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    cart.map(product => {
        total = total + product.price * product.quantity;
    })

    let shipping = 0;
    if (total > 35){
        shipping = 0;
    } else if (total>15){
        shipping = 4.99;
    } else if (total > 0){
        shipping = 12.99;
    } 

    const tax = total/10;

    const grandTotal = (total + shipping + Number(tax)).toFixed(2)
    
    const formatNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision);
    }

    return (
        <div>
            <h3>Cart Summery: {cart.length}</h3>
            <h3>Total: {formatNumber(total)}</h3>
            <h3>Shipping cost: {shipping}</h3>
            <h4>Tax: {formatNumber(tax)}</h4>
            <h3>Total price: {grandTotal}</h3>
            {
                props.children 
            }
        </div>
    );
};

export default Cart;
