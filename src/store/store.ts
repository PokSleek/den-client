import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';

import { increment } from './middlewares/increment';
import reducer from './reducers';
import { logger } from './middlewares/logger';

const preloadedState = {
    main: {
        header: 'NEW',
    },
};

const store = createStore(reducer, preloadedState, applyMiddleware(logger, thunkMiddleWare, increment));

export default store;
