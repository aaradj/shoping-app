import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import { productsContext } from '../../services/context/ProductsContextProvider';
import styles from "./productDetails.module.css";

const ProductDetails = (props) => {
    const data=useContext(productsContext);
    const id=props.match.params.id;
    const products=data[id - 1];
    const {title,image,description,category,price}=products
    return (
        <div className={styles.container}>
            <div className={styles.row1}>
            <img src={image} alt="product"/>
            </div>
            <div className={styles.row2}>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>category:<p>{category}</p></span>
            <p>{price}$</p>
            <Link to="/home">Back to shop</Link>
            </div>
        </div>
    );
};

export default ProductDetails;