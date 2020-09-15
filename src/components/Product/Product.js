import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Product = (props) => {

    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div className="img">
                <img src={img} alt=""/>
            </div>
            <div className="description">
                <h4 className="product-name">{name}</h4>
                <p><small>Seller: {seller}</small></p>
                <p>${price}</p>
                <p>Stock: {stock} piece</p>
                <button onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;