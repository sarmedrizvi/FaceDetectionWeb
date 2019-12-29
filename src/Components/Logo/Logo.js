import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import Brain from '../../assets/brain.png';
const Logo = () => (
    <div className='ma4 mt0 '>
        <Tilt className="Tilt br2 shadow-2 " options={{ max: 25 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"><img src={Brain} className='' style={{padding:'24px 2px'}} alt='logo'></img> </div>
        </Tilt>
    </div>

)

export default Logo;