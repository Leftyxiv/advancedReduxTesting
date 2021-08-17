import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from 'middlewares/async'
import reducers from 'reducers';
import stateValidator from 'middlewares/stateValidator';

/* eslint-disable */
export default ({children, initialState = {}}) => {
  const store = createStore(reducers, initialState, applyMiddleware(async, stateValidator));
  return <Provider store={store}>
    {children}
  </Provider>
}