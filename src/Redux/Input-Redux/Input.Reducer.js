import InputActionTypes from './Input.types'

const INITIAL_STATE = {
    Input: null,
    URL: null
}

const InputReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case InputActionTypes.INPUT_TEXT:
            return {
                ...state,
                Input: action.payload
            }
        case InputActionTypes.URL:
            
            return {
                ...state,
                URL: action.payload
                
            }
        default:
            return state;
    }
}

export default InputReducer;