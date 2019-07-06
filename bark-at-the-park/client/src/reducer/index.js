export default function reducer(state, action) {
  console.log('state: ',state)
  switch (action.type) {
    case "LOGGED_OK":
      return { ...state, logged: true };
    case "LOGGED_OUT":
      return { ...state, logged: false };
    default:
      return state;
  }
}