import React from 'react'
import { RouteChanging } from '../../Redux/Route/Route-Actions';
import { connect } from 'react-redux'


const Navigation = ({ route,routeChange }) => (
    <nav className='flex justify-end'>
        {
            routeChange === 'home' ?
            <span className='f3 link dim black underline pa3 pointer' onClick={() => route('signin')}>Sign Out</span>
            :
            routeChange === 'signin' ?
            (<span className='f3 link dim black underline pa3 pointer' onClick={() => route('Register')}>Register</span>)
            :
            (<span className='f3 link dim black underline pa3 pointer' onClick={() => route('signin')}>Sign In</span>)
        }
    </nav>
)

const mapDispatchToProp = (dispatch) => ({
    route: RouteChange => dispatch(RouteChanging(RouteChange))
})

const mapStateToProps=(state)=>({
    routeChange: state.routeChange.Route
})
export default connect(mapStateToProps, mapDispatchToProp)(Navigation);