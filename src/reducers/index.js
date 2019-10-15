const initialState = {
  pizzas: [],
  loading: true,
  errors: [],
  cartItems: [],
  totalTime: 10
};

const updateCartItems = (cartItems, item, idx) => {
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

const updateCartItem = (pizza, item = {}) => {

  const { id = pizza.id, 
          count = 0, 
          title = pizza.pizza_name, 
          total = 0} = item;
          

  return {
    id,
    title,
    count: count + 1,
    total: total + pizza.cooking_time
  };
};

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
          const pizzaId = action.payload;
          const pizza = state.pizzas.find((pizza) => pizza.id === pizzaId);
          const itemIndex = state.cartItems.findIndex(({id}) => id === pizzaId);
          const item = state.cartItems[itemIndex];

          const newItem = updateCartItem(pizza, item);
          return {
            ...state,
            cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
          };

    default:
      return state;
  }
};

export default reducer;