import { ACTION_TYPES } from '../reducers/userReducer';

export const loginUser = (payload) => ({
    type: ACTION_TYPES.LOGIN_USER,
    payload
})