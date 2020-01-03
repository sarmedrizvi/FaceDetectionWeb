import UserActionTypes from "./User-Types";


const INITIAL_STATE = {
    user: {
        id: '',
        name: '',
        email: '',
        password:'',
        entries: 0,
        joined: '',
    }
}

export const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.USER_CHANGE:
            return {
                ...state,
                user:action.payload
            }


        default:
            return state;
    }
}