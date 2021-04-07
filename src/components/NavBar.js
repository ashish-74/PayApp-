import React, {useContext} from 'react'
import { PaymentContext } from '../contexts/PayContext';

const NavBar = () => {
    const { payments } = useContext(PaymentContext);
    return (
        <div className='navbar'>
            <h1>Payment Due List</h1>
            <p>Currently you have {payments.length} payments to make.</p>
            
        </div>
    )
}

export default NavBar;
