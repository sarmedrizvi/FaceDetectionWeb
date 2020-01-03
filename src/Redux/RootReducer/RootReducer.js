import InputReducer from '../Input-Redux/Input.Reducer';

import { combineReducers } from 'redux'
import SquareBoxReducer from '../SqaureBox-Redux/SquareBox-Reducer';
import RouteReducer from '../Route/Route-Reducer';
import { UserReducer } from '../Route/User/User-Reducer';

export default combineReducers({
    InputBox: InputReducer,
    size: SquareBoxReducer,
    routeChange: RouteReducer,
    user: UserReducer
})