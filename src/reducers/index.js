const initialState = {
  pizzas: [],
  loading: true,
  errors: [],
  cartItems: [],
  totalTime: 10
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

const updateOrder = (state, pizzaId, quantity) => {
  const {pizzas, cartItems} = state;

  const pizza = pizzas.find(({id}) => id === pizzaId);
  const itemIndex = cartItems.findIndex(({id}) => id === pizzaId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(pizza, item, quantity);
  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };

}

const reducer = (state = initialState, action) => {

  console.log(action.type);
  
  switch (action.type) {
    case 'FETCH_MENU_SUCCESS':
      return {
        ...state,
        pizzas: action.payload,
        loading: false
      };
      case 'FETCH_MENU_REQUEST':
        return {
          ...state,
          loading: true
        };
        case 'FETCH_MENU_FAILURE':
            return {
              ...state,
              loading: false,
              errors: action.payload
            };

        case 'PIZZA_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);

          case 'PIZZA_REMOVED_FROM_CART':
              return updateOrder(state, action.payload, -1);
            
          case 'ALL_PIZZAS_REMOVED_FROM_CART':
              const item = state.cartItems.find(({id}) => id === action.payload)
              return updateOrder(state, action.payload, -item.count);

    default:
      return state;
  }
};

export default reducer;