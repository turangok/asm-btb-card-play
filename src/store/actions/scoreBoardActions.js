import { ACTION_TYPES } from '../reducers/scoreBoardReducer';

export const updateScoreBoard = (payload) => ({
    type: ACTION_TYPES.UPDATE_SCOREBOARD,
    payload
})

export const initializeScoreBoard = (payload) => ({
    type: ACTION_TYPES.INITIALIZE_SCOREBOARD,
    payload
})
