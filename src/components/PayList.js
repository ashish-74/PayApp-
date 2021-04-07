import React, {useContext} from 'react';
import { PaymentContext } from '../contexts/PayContext';
import PayDetails from './PayDetails';

const PayList = () => {
    const {payments} = useContext(PaymentContext);
    return payments.length ? (
        <div className='pay-list'>
            <ul>
                {payments.map(payment => {
                    return (<PayDetails payment={payment} key={payment.id} />)
                })}
            </ul>
        </div>        
    ) : (
        <div className='empty'>No payments to be done.Enjoy :)</div>
    )
}

export default PayList;