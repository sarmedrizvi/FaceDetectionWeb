import UserActionTypes from "./User-Types";

export const UserChange = object => ({
    type: UserActionTypes.USER_CHANGE,
    payload: object,

})