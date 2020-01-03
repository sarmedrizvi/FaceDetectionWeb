import React from 'react'

import './Rank.css'
import { connect } from 'react-redux'
const Rank = ({user}) => (
    <div>
        <div className='white f3'>
            {`${user.name}, your current rank is ...`}
        </div>
        <div className='white f1'>
            {user.entries}
        </div>
    </div>

)
const mapStateToProps = state => ({

    user: state.user.user
})


export default connect(mapStateToProps)(Rank);