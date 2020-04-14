import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <>
            <Link className="product" to={`/products/${props._id}`}>
                <div className="product-name">{props.title}</div>
          <img className="product-image" src={props.imgURL} alt={props.name} />
          <div className="product-name">{props.text}</div>
          
               
            </Link>
        </>
    )
}

export default Product