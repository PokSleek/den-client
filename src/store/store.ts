import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk'
import { increment } from './middleWares/increment';

import reducer from './reducers';
import { logger } from './middleWares/logger';


const preloadedState = {
  main: {
    header: "NEW"
  }
};

const store = createStore(reducer, preloadedState, applyMiddleware(logger, thunkMiddleWare, increment));

export default store
