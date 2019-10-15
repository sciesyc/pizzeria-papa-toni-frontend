import updatePizzaList from './pizza-list';
import updateOrderCart from './order-cart';


const reducer = (state, action) => {

  return {
    pizzaList: updatePizzaList(state, action),
    orderCart: updateOrderCart(state, action)
  }
};

export default reducer;