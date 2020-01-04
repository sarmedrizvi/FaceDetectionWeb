import React from 'react'
import { RouteChanging } from '../../Redux/Route/Route-Actions';
import { connect } from 'react-redux'
import { ButtonClicked } from '../../Redux/SqaureBox-Redux/SquareBox.Action';
import { InputUrl } from '../../Redux/Input-Redux/Input.Action';


const Navigation = ({ route,routeChange,box ,URL}) => (
    <nav className='flex justify-end'>
        {
            routeChange === 'home' ?
            <span className='f3 link dim black underline pa3 pointer' onClick={() =>{box([{}]); route('signin'); URL(' ')}}>Sign Out</span>
            :
            routeChange === 'signin' ?
            (<span className='f3 link dim black underline pa3 pointer' onClick={() => route('Register')}>Register</span>)
            :

            (<span className='f3 link dim black underline pa3 pointer' onClick={() => route('signin')}>Sign In</span>)
        }
    </nav>
)

const mapDispatchToProp = (dispatch) => ({
    route: RouteChange => dispatch(RouteChanging(RouteChange)),
    box:boxes=>dispatch(ButtonClicked(boxes)),
    URL: URL => dispatch(InputUrl(URL)),
})


const mapStateToProps=(state)=>({
    routeChange: state.routeChange.Route
})
export default connect(mapStateToProps, mapDispatchToProp)(Navigation);