import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const {name, img, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div className="img">
                <img src={img} alt=""/>
            </div>
            <div className="description">
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <p><small>Seller: {seller}</small></p>
                <p>${price}</p>
                <p>Stock: {stock} piece</p>
                {
                    props.showAddToCart === true && <button className="main-button" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;