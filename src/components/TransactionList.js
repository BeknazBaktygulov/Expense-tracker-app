import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function TransactionList() {
    const { transactions } = useContext(GlobalContext);
    
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn">x</button>
                </li>
      </ul>
        </div>
    )
}

export default TransactionList
