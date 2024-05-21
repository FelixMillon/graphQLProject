export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});
