import updatePizzaList from './reducer-pizza-list';
import updateOrderCart from './reducer-order-cart';
import updateUserData from './reducer-users-data';


const reducer = (state, action) => {

  return {
    pizzaList: updatePizzaList(state, action),
    orderCart: updateOrderCart(state, action),
    userData: updateUserData(state, action)
  }

};

export default reducer;