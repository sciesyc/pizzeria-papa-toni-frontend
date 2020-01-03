import React , {Component} from 'react';
import {connect} from 'react-redux';
import { compose } from "redux";
import withPizzastoreService from "../hoc/with-pizzastore-service";
import { fetchSentOrderData } from "../../actions/actions-user";
import { pizzaAddedToCart, 
        pizzaRemovedFromCart, 
        allPizzasRemovedFromCart } from '../../actions/actions-pizza-menu';

import './order-cart-table.css';


class OrderCartTable extends Component {

    renderRow = (item, idx) => {
        const { id, title, count, total} = item;
        const {onIncrease, onDecrease, onDelete} = this.props;
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
            onClick={() => {onIncrease(id)}}
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

    componentDidMount() {
        console.log(this.props.userName);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {userName, orderTotal,  fetchSentOrder} = this.props;

        if(orderTotal === 0) {
            alert("Nothing to cook!")
            return;
        }
        console.log(orderTotal);
        fetchSentOrder(userName, "in process", orderTotal)
        alert('order in progress');
        setTimeout(()=> alert("Your order is done!"), orderTotal*1000);
    }

    render(){
        const { items, orderTotal } = this.props;
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
                        {items.map(this.renderRow)}
                    </tbody>
                </table>
                <button
                onClick={this.handleSubmit} 
                >Sent order</button>
                <div className="total">
                    Total time: {orderTotal}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ( { orderCart: { cartItems, orderTotal }, userData: {userName} }) => {
    return {
        items: cartItems,
        userName,
        orderTotal
    }
}

const mapDispatchToProps = (dispatch, {pizzastoreService}) => {
    return {
        fetchSentOrder: fetchSentOrderData(pizzastoreService, dispatch),
        onIncrease: (id)=> dispatch(pizzaAddedToCart(id)),
        onDecrease: (id) => dispatch(pizzaRemovedFromCart(id)),
        onDelete: (id) => dispatch(allPizzasRemovedFromCart(id))
    }
};

export default compose(
    withPizzastoreService(),
    connect(mapStateToProps,mapDispatchToProps)
)(OrderCartTable);