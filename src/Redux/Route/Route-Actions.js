import RouteActionTypes from "./Route-Types";


export const RouteChanging = (object) => ({
    type: RouteActionTypes.PAGE_CHANGE,
    payload: object
})
