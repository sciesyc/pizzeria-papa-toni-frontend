import React, {Component} from 'react';
import PizzaMenuListItem from '../menu-list-item';
import {fetchMenu, pizzaAddedToCart} from '../../actions/actions-pizza-menu'
import compose from '../../utils/compose';
import withPizzastoreService from '../hoc/with-pizzastore-service';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import HistoryListItem from "../history-list-item";
import {fetchOrderHistory} from '../../actions/actions-user';



class HistoryList extends Component {

    componentDidMount() { 
        const {fetchOrderHistory, userName} = this.props;
        fetchOrderHistory('sad');      // current userName
        console.log(this.props.currentOrderHistory);
    }

    render() {
        const {currentOrderHistory} = this.props;
        return(
            <ul>
            {
                currentOrderHistory.map(el => {
                    return (
                        <li key={el.orderId}>
                            <HistoryListItem historyData={el}/>
                        </li>
                    )
                })
            }
        </ul>
        );
    }
}

const mapStateToProps = ({userData: {currentOrderHistory, userName}}) => {
    return {currentOrderHistory, userName}
};

const mapDispatchToProps = (dispatch, {pizzastoreService}) => {
    return {
        fetchOrderHistory: fetchOrderHistory(pizzastoreService, dispatch)
    };
};



export default compose(
    withPizzastoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(HistoryList);
