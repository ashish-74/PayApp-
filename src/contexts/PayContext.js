import React, {createContext, useState} from 'react';
import uuid from 'uuid';

export const PaymentContext = createContext();

const PaymentContextMain = (props) => {

    const [payments, setPayments] = useState([
        {title: 'Grocery', amount: '300',id:1},
        {title:'Newspaper',amount:'200',id:2},
    ]);

    const addPayment = (title,amount) => {
        setPayments([...payments, {title, amount, id: uuid() }]);
    }

    const removePayment = (id) => {
        setPayments(payments.filter( payment => payment.id !== id ));
    }

    return(
        <PaymentContext.Provider value={{payments, addPayment, removePayment}} >
            {props.children}
        </PaymentContext.Provider>
    )

}

export default PaymentContextMain;