import React from 'react';

const Cart = props => {
  return (
    <div>
        <h2>Cart</h2>
        <table>
            <thead>
            <tr>
                <th>Item Purchased</th>
                <th>QTY</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
                {props.cart.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr> 
                    )
                })}
            {props.cart.length > 0 &&
                <tr className='bold'>
                    <td>Total</td>
                    <td>{props.cart.reduce((acc, item) => acc + item.quantity, 0)}</td>
                    <td>${props.cart.reduce((acc, item) => acc + item.price, 0)}</td>
                </tr>
            }
            </tbody>
        </table>
    </div>
  )
}

export default Cart