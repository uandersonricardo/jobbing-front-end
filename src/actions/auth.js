export const signIn = (token, user) => dispatch => {
  return dispatch({
    type: 'SIGN_IN',
    payload: { token, user }
  });
};
