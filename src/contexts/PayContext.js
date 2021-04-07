import React, {createContext, useReducer, useEffect} from 'react';
import { payReducer } from '../reducers/payReducer';

export const PaymentContext = createContext();

const PaymentContextMain = (props) => {
    const [payments, dispatch] = useReducer(payReducer, [], ()=>{
        const localData = localStorage.getItem('payments');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('payments',JSON.stringify(payments))
    },[payments]);
    
    return(
        <PaymentContext.Provider value={{payments, dispatch}} >
            {props.children}
        </PaymentContext.Provider>
    )

}

export default PaymentContextMain;