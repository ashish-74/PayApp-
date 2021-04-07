import React, {useContext, useState} from 'react';
import { PaymentContext } from '../contexts/PayContext';

const PayForm = () => {
    const {addPayment} = useContext(PaymentContext);
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPayment(title,amount);
        setTitle('');
        setAmount('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Payment title' value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type='text' placeholder='Payment amount' value={amount} onChange={(e) => setAmount(e.target.value)} required/>
            <input type='submit' value='Add Payment' />
        </form>
    )
}

export default PayForm;