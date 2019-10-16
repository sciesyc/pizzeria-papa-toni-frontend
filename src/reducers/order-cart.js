const updateTotalCookingTime = (pizza, orderTotal, quantity) => orderTotal + quantity * pizza.cooking_time;

const updateOrder = (state, pizzaId, quantity) => {
  const { pizzaList: {pizzas}, orderCart: {cartItems,orderTotal}} = state;

  const pizza = pizzas.find(({id}) => id === pizzaId);
  const itemIndex = cartItems.findIndex(({id}) => id === pizzaId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(pizza, item, quantity);
  return {
    orderTotal: updateTotalCookingTime(pizza, orderTotal, quantity),
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
};

const updateCartItems = (cartItems, item, idx) => {
  if(item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1),
    ];
  }
  
  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }
  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1),
  ];
};

const updateCartItem = (pizza, item = {}, quantity) => {

  const { id = pizza.id, 
          count = 0, 
          title = pizza.pizza_name, 
          total = 0} = item;
          

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*pizza.cooking_time
  };
};





const updateOrderCart = (state, action) => {
    if (state === undefined) {
      return {
        cartItems: [],
        orderTotal: 0 
      }
    }
  
    switch(action.type) {
      case 'PIZZA_ADDED_TO_CART':
        return updateOrder(state, action.payload, 1);
        case 'PIZZA_REMOVED_FROM_CART':
          return updateOrder(state, action.payload, -1); 
        case 'ALL_PIZZAS_REMOVED_FROM_CART':
          const item = state.orderCart.cartItems.find(({id}) => id === action.payload)
           return updateOrder(state, action.payload, -item.count);
  
           default:
              return state.orderCart;  
    }
  };


 export default updateOrderCart;
  