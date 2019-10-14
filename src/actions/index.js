const pizzasLoaded = (newPizzas) => {
    return {
      type: 'PIZZAS_LOADED',
      payload: newPizzas
    };
  };
  
  export {
    pizzasLoaded
  };