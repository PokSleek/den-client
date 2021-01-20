import { combineReducers } from 'redux'

import { mainReducer } from './headerReducer';

export default combineReducers({  main: mainReducer  })
