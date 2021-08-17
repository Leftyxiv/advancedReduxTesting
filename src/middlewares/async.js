/* eslint-disable */

export default ({ dispatch }) => (next) => (action) => {
  // check to see if the action has a promise
  // if it does wait and resolve the promise
  // if it doesn't just call the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  action.payload.then((res) => {
    const newAction = { ...action, payload: res };
    dispatch(newAction);
  });
}