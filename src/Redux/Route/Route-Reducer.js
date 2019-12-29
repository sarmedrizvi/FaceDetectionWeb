import RouteActionTypes from "./Route-Types";


const INITIAL_STATE = {
    Route:'home'
}

const RouteReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RouteActionTypes.PAGE_CHANGE:
            return {
                ...state,
                Route: action.payload
            }
        default:
            return state;
    }
}

export default RouteReducer;