import InputReducer from '../Input-Redux/Input.Reducer';

import { combineReducers } from 'redux'

export default combineReducers({
    InputBox: InputReducer,
})