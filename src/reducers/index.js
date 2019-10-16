import updatePizzaList from './pizza-list';
import updateOrderCart from './order-cart';
import updateUserData from './users-data';


const reducer = (state, action) => {

  return {
    pizzaList: updatePizzaList(state, action),
    orderCart: updateOrderCart(state, action),
    userData: updateUserData(state, action)
  }

};

export default reducer;