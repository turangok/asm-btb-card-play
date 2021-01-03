import { combineReducers } from 'redux';

import scoreBoard from './scoreBoardReducer';
import user from './userReducer';

export default combineReducers({
    scoreBoard,
    user
})