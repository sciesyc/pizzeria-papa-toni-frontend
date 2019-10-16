import React, {Component} from 'react';
import PizzaMenuListItem from '../menu-list-item';
import {fetchMenu, pizzaAddedToCart} from '../../actions/pizza-menu-actions'
import compose from '../../utils/compose';
import withPizzastoreService from '../hoc/with-pizzastore-service';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import "./history-list-item.css";



const HistoryListItem = ({ historyData }) => {
    const { clientName, cooking_time, isReady} = historyData;
    return (
        <ul class="list-group-ul">
            <li class="list-group-item-li d-flex justify-content-between align-items-center">
            Client: 
            <span class="badge badge-primary badge-pill">{clientName}</span>
            </li>
            <li class="list-group-item-li d-flex justify-content-between align-items-center">
            Time: 
            <span class="badge badge-primary badge-pill">{cooking_time}</span>
            </li>
            <li class="list-group-item-li d-flex justify-content-between align-items-center">
            Progress: 
            <span class="badge badge-primary badge-pill">{isReady}</span>
            </li>
        </ul>
    )
}

export default HistoryListItem;