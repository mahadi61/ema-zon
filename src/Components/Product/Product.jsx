import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    const {img, name, seller, quantity, price, stock, ratings} = props.product;
    return (
        <div className='product'>
            <img className='product-img' src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price: {price}$</h3>
            <div>
                <p>Manufacture: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
        </div>
    );
};

export default Product;