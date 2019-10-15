
const signUpSuccess = (data) => ({
  type: "SIGN_UP_SUCCESS",
  payload: data
});

const signInSuccess = (data) => ({
  type: "SIGN_IN_SUCCESS",
  payload: data
});

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
      alert('ez');
      return;
      console.log("User name doesn't exist");
    } 
  alert('abc');
    dispatch(signInSuccess(res.data[0].clientName, res.data[0].password, res.data[0].token));

  })
  .catch( err => console.log(err));
} 

export {
  fetchSignUpData,
  fetchSignInData
};