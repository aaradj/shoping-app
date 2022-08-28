import React,{ useReducer,createContext } from 'react';
const initialState={
    selectedItems:[],
    itemCounter:0,
    total:0,
    checkout:false,
};
const sumItem=item=>{
    const itemCounter=item.reduce((total,product)=> total + product.quantity,0);
    const total=item.reduce((total,product)=> total + product.quantity * product.price,0);
    return({itemCounter,total});
};
const cartReducer=(state,action)=>{
    switch(action.type){
        case "ADD_ITEMS":
            if(!state.selectedItems.find(item=> item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity:1,
                });
            };
            return({
                ...state,
                ...sumItem(state.selectedItems),
                selectedItems:[...state.selectedItems],
                checkout:false,
            });
            case "REMOVE_ITEMS":
                const newSelectedItems=state.selectedItems.filter(item=> item.id !== action.payload.id)
                return({
                    ...state,
                    ...sumItem(newSelectedItems),
                    selectedItems:[...newSelectedItems],
                });
                case "INCREASE":
                    const indexI=state.selectedItems.findIndex(item=> item.id === action.payload.id);
                    state.selectedItems[indexI].quantity++;
                    return({
                        ...state,
                        ...sumItem(state.selectedItems),
                    });
                    case "DECREASE":
                        const indexD=state.selectedItems.findIndex(item=> item.id === action.payload.id);
                        state.selectedItems[indexD].quantity--;
                        return({
                            ...state,
                            ...sumItem(state.selectedItems), 
                        });
                        case "CHECKOUT":
                            return({
                                selectedItems:[],
                                itemCounter:0,
                                total:0,
                                checkout:true,
                            });
                            case "CLEAR":
                                return({
                                    selectedItems:[],
                                    itemCounter:0,
                                    total:0,
                                    checkout:false,
                                });   
    };
};

export const cartContext=createContext();

const CartContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(cartReducer,initialState);
    return (
        <cartContext.Provider value={{state,dispatch}}>
                {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;