import SquareBoxTypes from "./SquareBox.Types"

const INITIAL_STATE = {
    size: [{}]
}

const SquareBoxReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SquareBoxTypes.SQAURE_CHANGE:
            return {
                ...state,
                size: action.payload
            }
        default:
            return state;
    }
}

export default SquareBoxReducer;