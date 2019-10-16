const updateUserData = (state, action) => {
    if (state === undefined) {
        return {
            signUpSuccess: false,
            userName: "sad",
            isLoggedIn: false,
            currentOrderHistory: []
        }
    };

    switch (action.type){
        case "SIGN_UP_SUCCESS":
            return {
                signUpSuccess: true
            }
        
        case "SIGN_IN_SUCCESS":
            localStorage.setItem('username', action.payload[0]);
            localStorage.setItem('token', action.payload[2]);
            return {
                isLoggedIn: true,
                userName: action.payload[0]    
            } 

        case "GET_HISTORY":     
            return {
                currentOrderHistory: action.payload
            }

            default: return state.userData;
    }
}

export default updateUserData;