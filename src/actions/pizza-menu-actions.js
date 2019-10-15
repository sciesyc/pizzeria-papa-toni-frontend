const menuSuccess = (menu) => {
    return {
        type: 'FETCH_MENU_SUCCESS',
        payload: menu
    }
}

const menuRequest = () => {
    return {
        type: 'FETCH_MENU_REQUEST'
    }
}

const menuFailure = (err) => {
    return {
        type: 'FETCH_MENU_FAILURE',
        payload: err
    }
}

export const pizzaAddedToCart = (pizzaId) => {
    return {
        type:  'PIZZA_ADDED_TO_CART',
        payload: pizzaId
    }
}

export const pizzaRemovedFromCart = (pizzaId) => {
    return {
        type: 'PIZZA_REMOVED_FROM_CART',
        payload: pizzaId
    };
};

export const allPizzasRemovedFromCart = (pizzaId) => {
    return {
        type: 'ALL_PIZZAS_REMOVED_FROM_CART',
        payload: pizzaId
    };
};

const pizzasLoaded = (newPizzas) => {
    return {
      type: 'PIZZAS_LOADED',
      payload: newPizzas
    };
};

const fetchMenu = (pizzastoreService, dispatch) => () => {
    dispatch(menuRequest());
    pizzastoreService.getPizzas()
    .then(res => dispatch(menuSuccess(res)))
    .catch(err => dispatch(menuFailure(err)));
}


export {
    pizzasLoaded,
    fetchMenu
}