
const signUpSuccess = (data) => ({
  type: "SIGN_UP_SUCCESS",
  payload: data
});

const signInSuccess = (data) => ({
  type: "SIGN_IN_SUCCESS",
  payload: data
});

const sentOrderSuccess = (...args) => ({
  type: "SENT_ORDER_SUCCESS",
  payload: args
})


const getHistory = (orderHistory) => ({
  type: "GET_HISTORY",
  payload: orderHistory
})

const fetchSentOrderData = (pizzastoreService, dispatch) => (userName, isDone, totalCookingTime) => {
  pizzastoreService.sentOrder(userName, isDone, totalCookingTime)
  .then(res => {
    dispatch(sentOrderSuccess(res))
  })
  .catch(err => console.log(err))
}

const fetchSignUpData = ( pizzastoreService, dispatch ) => (userName, password) => {
  pizzastoreService.signUp(userName, password)
  .then(res => {
    if (res === 409) {
      alert('User existing!!!');
    } 
    dispatch(signUpSuccess(res));
    alert("Success registration!");
  })
  .catch( err => console.log(err));
} 

const fetchSignInData = ( pizzastoreService, dispatch ) => (userName, password) => {
  pizzastoreService.signIn(userName, password)
  .then(res => {
    console.log(res);
    if (res === 404) {
      alert('Something goes wrong!!!');
      return;
    } 
    alert(`You're successfully signed in ${userName}`);
    dispatch(signInSuccess(res.data[0].clientName, res.data[0].password, res.data[0].token));

  })
  .catch( err => console.log(err));
};

const fetchOrderHistory = (pizzastoreService, dispatch) => (userName) => {
  pizzastoreService.getOrderHistory(userName)
  .then( res=> dispatch(getHistory(res)))
  .catch(err => console.log(err));
}

export {
  fetchSignUpData,
  fetchSignInData,
  fetchSentOrderData,
  fetchOrderHistory
};