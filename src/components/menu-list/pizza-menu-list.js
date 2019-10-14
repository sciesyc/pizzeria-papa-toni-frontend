import React, {Component} from 'react';
import PizzaMenuListItem from '../menu-list-item';
import {fetchMenu} from '../../actions/pizza-menu-actions'
import compose from '../../utils/compose';
import withPizzastoreService from '../hoc/with-pizzastore-service';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './pizza-menu-list.css';


class PizzaMenuListContainer extends Component {
    
    componentDidMount() {
        this.props.fetchMenu();
    }

    render() {
        const { pizzas, loading, errors} = this.props;

        if (loading) {
        return <Spinner/>
         }

        if (errors.length !== 0) {
            return <ErrorIndicator />
        }
        
        return <PizzaMenuList pizzas={pizzas} />
    };
};

const PizzaMenuList = ({pizzas}) => {
    return(
        <ul >
            {
                pizzas.map(pizza => {
                    return(
                        <li key={pizza.id}>
                            <PizzaMenuListItem pizza={pizza} />
                        </li>
                    )
                })
            }
        </ul>
    )
}


const mapStateToProps = ({pizzas, loading, errors}) => {
    return {pizzas, loading, errors};
}

const mapDispatchToProps = (dispatch, { pizzastoreService }) => {
    return{
        fetchMenu: fetchMenu(pizzastoreService, dispatch)
    }     
};

export default compose(
    withPizzastoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PizzaMenuListContainer);
