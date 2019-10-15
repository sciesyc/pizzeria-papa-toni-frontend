import React, {Component} from 'react';
import PizzaMenuListItem from '../menu-list-item';
import {fetchMenu, pizzaAddedToCart} from '../../actions/pizza-menu-actions'
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
        
        const { pizzas, loading, errors, onAddedToCart} = this.props;

        if (loading) {
        return <Spinner/>
         }

        if (errors.length !== 0) {
            return <ErrorIndicator />
        }
        
        return <PizzaMenuList pizzas={pizzas}  onAddedToCart={onAddedToCart}/>
    };
};

const PizzaMenuList = ({pizzas, onAddedToCart}) => {
    return(
        <ul >
            {
                pizzas.map(pizza => {
                    return(
                        <li key={pizza.id}>
                            <PizzaMenuListItem 
                            pizza={pizza} 
                            onAddedToCart={() => onAddedToCart(pizza.id)}
                            />
                        </li>
                    )
                })
            }
        </ul>
    )
}


const mapStateToProps = ({ pizzaList: { pizzas, loading, errors } }) => {
    return {pizzas, loading, errors};
}

const mapDispatchToProps = (dispatch, { pizzastoreService }) => {
    return{
        fetchMenu: fetchMenu(pizzastoreService, dispatch),
        onAddedToCart: (id) => dispatch(pizzaAddedToCart(id))
    }     
};

export default compose(
    withPizzastoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PizzaMenuListContainer);
