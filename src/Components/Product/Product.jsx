import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
  // console.log(props.product);
  const { id, img, name, seller, quantity, price, stock, ratings } =
    props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <img className="product-img" src={img} alt="" />
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <h3 className="margin">Price: ${price}</h3>
        <p className="margin">Manufacture: {seller}</p>
        <p className="margin">Rating: {ratings} star</p>
      </div>

      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-add-to-cart"
      >
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
