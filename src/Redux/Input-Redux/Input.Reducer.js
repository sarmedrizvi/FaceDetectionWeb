import InputActionTypes from './Input.types'

const INITIAL_STATE = {
    Input: ''
}

const InputReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case InputActionTypes.INPUT_TEXT:
            return {
                ...state,
                Input: action.payload
            }
        default:
            return {
                state
            }
    }
}

export default InputReducer;