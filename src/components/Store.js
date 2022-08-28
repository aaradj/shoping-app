import React, { useContext } from "react";
import { productsContext } from "../services/context/ProductsContextProvider";
import Product from "./shared/Product";
import styles from "./store.module.css";

const Store = () => {
  const products = useContext(productsContext);
  return (
    <div className={styles.container} id="shop">
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
