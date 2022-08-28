import React,{ useState,useEffect,createContext } from 'react';
import { getProducts } from '../api';
export const productsContext=createContext();

const ProductsContextProvider = ({children}) => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchApi=async()=>{
            setProducts(await getProducts());
        };
        fetchApi();
    },[]);
    return (
        <productsContext.Provider value={products}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductsContextProvider;