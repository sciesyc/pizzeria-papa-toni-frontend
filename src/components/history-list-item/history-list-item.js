import React, {Component} from 'react';
import PizzaMenuListItem from '../menu-list-item';
import {fetchMenu, pizzaAddedToCart} from '../../actions/actions-pizza-menu'
import compose from '../../utils/compose';
import withPizzastoreService from '../hoc/with-pizzastore-service';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import "./history-list-item.css";



const HistoryListItem = ({ historyData }) => {
    const { clientName, cooking_time, isReady} = historyData;
    return (
        <ul className="list-group-ul">
            <li className="list-group-item-li d-flex justify-content-between align-items-center">
            Client: 
            <span className="badge badge-primary badge-pill">{clientName}</span>
            </li>
            <li className="list-group-item-li d-flex justify-content-between align-items-center">
            Time: 
            <span className="badge badge-primary badge-pill">{cooking_time}</span>
            </li>
            <li className="list-group-item-li d-flex justify-content-between align-items-center">
            Progress: 
            <span className="badge badge-primary badge-pill">{isReady}</span>
            </li>
        </ul>
    )
}

export default HistoryListItem;