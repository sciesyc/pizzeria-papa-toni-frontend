const updatePizzaList = (state, action) => {

    if (state === undefined) {
      return {
        pizzas: [],
        loading: true,
        errors: []
      }
    }
    switch (action.type) {
      case 'FETCH_MENU_REQUEST':
          return {
            loading: true,
            errors: []
          };
        case 'FETCH_MENU_SUCCESS':
          return {
            pizzas: action.payload,
            loading: false,
            errors: []
          };
            case 'FETCH_MENU_FAILURE':
              return {
                loading: false,
                errors: action.payload
              };
  
              default:
        return state.pizzaList;        
    }
  };

  export default updatePizzaList;