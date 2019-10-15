import React from 'react';
import {connect} from 'react-redux';

import { pizzaAddedToCart, 
        pizzaRemovedFromCart, 
        allPizzasRemovedFromCart } from '../../actions/pizza-menu-actions'; 

import './order-cart-table.css';


const OrderCartTable = ( {items, totalTime, onIncrease, onDecrease, onDelete} ) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total} = item;
        return (
        <tr key = {id}>
            <td>{idx + 1}</td>
            <td>{title}</td>
            <td>{count}</td>
            <td>{total}</td>
            <td>
            <button
            onClick={() => onDelete(id)} 
            className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
            <button
            onClick={() => onIncrease(id)}  
            className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-plus-circle" />
            </button>
            <button
            onClick={() => onDecrease(id)}  
            className="btn btn-outline-warning btn-sm float-right">
                <i className="fa fa-minus-circle" />
            </button>
            </td>
        </tr>
        );
    };

    return (
        <div className="order-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>
            <div className="total">
                Total time: {totalTime}
            </div>
        </div>
    )
}

const mapStateToProps = ( { orderCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = {
        onIncrease: pizzaAddedToCart,
        onDecrease: pizzaRemovedFromCart,
        onDelete: allPizzasRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderCartTable);