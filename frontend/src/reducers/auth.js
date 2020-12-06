const initialState = {
  token: null,
  user: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user
      };
    default:
      return state;
  }
}
