export const USER_LOGIN = 'user_login';

export default function (state = {}, action) {
  console.log('ta vindo', action.payload);
  switch (action.type) {
    case USER_LOGIN:
      return {...state, user: action.payload};
    default:
      return state;
  }
}
