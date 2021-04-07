import React, {useContext} from 'react';
import { PaymentContext } from '../contexts/PayContext';

const PayDetails = ({payment}) => {
    const {dispatch} = useContext(PaymentContext);
    return(
        <li onClick={() => dispatch({type: 'REMOVE_PAYMENT',id : payment.id})}>
            <div className='title'>{payment.title}</div>
            <div className='amount'>{payment.amount}</div>
        </li>        
    )
}

export default PayDetails;