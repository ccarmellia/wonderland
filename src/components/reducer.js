function reducer(state, action){
    switch (action.type) {
      case "LOGIN":
        localStorage.setItem("user", JSON.stringify(action.data.user));
        localStorage.setItem("token", JSON.stringify(action.data.token));
        return {
          ...state,
          isAuthenticated: true,
          user: action.data.user,
          token: action.data.token
        };
      case "LOGOUT":
        localStorage.clear();
        return {
          ...state,
          isAuthenticated: false,
          user: null
        };
      default:
        return state;
    }
  }

export default reducer;