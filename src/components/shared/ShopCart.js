import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../services/context/CartContextProvider';
import Cart from './Cart';
import styles from "./shopCart.module.css";

const ShopCart = () => {
    const {state,dispatch}=useContext(cartContext);
    return (
        <div className={styles.container}>
        <div className={styles.selectedItems}>
            {
                state.selectedItems.map(item=> <Cart key={item.id} item={item} />)
            }
        </div>
        {
            state.checkout===false && state.itemCounter > 0 && <div className={styles.all}>
            <div className={styles.rows}>
                <h3>Total Items:</h3>
                <p>{state.itemCounter}</p>
            </div>
            <div className={styles.rows}>
                <h3>Total Payment:</h3>
                <p>{(state.total).toFixed(2)}$</p>
            </div>
            <div className={styles.checkout}>
                <h3 onClick={()=> dispatch({type:"CHECKOUT", payload:{...state.selectedItems}})}>Check out</h3>
                <h3 onClick={()=> dispatch({type:"CLEAR",payload:{...state.selectedItems}})}>Clear</h3>
                <Link to="/home">Back to shop</Link>
            </div>
        </div>
        }

        {
            state.checkout===true &&      <div className={styles.checked}>
            <p>Check out successfully</p>
            <Link to="/home">Buy more</Link>
        </div>
        }

        {
            state.checkout===false && state.itemCounter === 0 && <div className={styles.clear}>
                <p>You don't have eny product</p>
                <Link to="/home">Back to shop</Link>
            </div> 
        }
        </div>
    );
};

export default ShopCart;