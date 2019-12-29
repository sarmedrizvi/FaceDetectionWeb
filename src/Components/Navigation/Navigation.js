import React from 'react'
import { RouteChanging } from '../../Redux/Route/Route-Actions';
import { connect } from 'react-redux'


const Navigation = ({route}) => (
    <nav className='flex justify-end'>
        <span className='f3 link dim black underline pa3 pointer' onClick={()=> route('signin')} >Sign Out</span>
    </nav>
)

const mapDispatchToProp = (dispatch) => ({
    route: RouteChange => dispatch(RouteChanging(RouteChange))
})

export default connect(null,mapDispatchToProp)(Navigation);