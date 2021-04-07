import React, {useContext} from 'react';
import { PaymentContext } from '../contexts/PayContext';

const PayDetails = ({payment}) => {
    const {removePayment} = useContext(PaymentContext);
    return(
        <li onClick={() => removePayment(payment.id)}>
            <div className='title'>{payment.title}</div>
            <div className='amount'>{payment.amount}</div>
        </li>        
    )
}

export default PayDetails;