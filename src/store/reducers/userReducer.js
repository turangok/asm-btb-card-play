import produce from 'immer';

export const ACTION_TYPES = {
    LOGIN_USER: "LOGIN_USER",
}

export const initialState = {
    user: {}
}

const scoreBoardReducer = (state = initialState, action) =>

    produce(state, (draft) => {

        switch (action.type) {
            case ACTION_TYPES.LOGIN_USER:
                draft.name = action.payload
                break;
            default:
                break;
        }
    }
    )

export default scoreBoardReducer;
