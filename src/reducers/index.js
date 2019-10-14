const initialState = {
  pizzas: [],
  loading: true,
  errors: [],
  cartItems: [
    {
      name: 'abc',
      id: 1,
      count: 10,
      total: 150
    },
    {
      name: 'abc',
      id: 1,
      count: 10,
      total: 150
    }
  ],
  totalTime: 10
};

const reducer = (state = initialState, action) => {
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
        }
        case 'FETCH_MENU_FAILURE':
            return {
              ...state,
              loading: false,
              errors: action.payload
            }
    default:
      return state;
  }
};

export default reducer;