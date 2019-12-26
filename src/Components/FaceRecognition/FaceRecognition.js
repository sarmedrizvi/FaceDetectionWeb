import React from 'react'

const FaceRecognition = ({ imageUrl }) => (
    <div className='center'>
        <div className='absolute mt2'>
            <img src={imageUrl} alt='' width='500px' height='auto'></img>
        </div>
    </div>
)

export default FaceRecognition;