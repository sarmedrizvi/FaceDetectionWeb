import React from 'react'
import { connect } from 'react-redux'
import './FaceRecognition.css';
const FaceRecognition = ({ URL, size }) => (
    <div className='center'>
        <div className='absolute mt2'>
            <img id='faceImage' src={URL} alt='' width='500px' height='auto'></img>
            <div className='bounding-box' style= {{ top:size.topRow, right:size.rightCol,bottom:size.bottomRow,left:size.leftCol}}></div>
        </div>
        {console.log(size)}
    </div>
)
const mapStateToProps = (state) => ({
    
    URL: state.InputBox.URL,
    size: state.size.size
   
})
export default connect(mapStateToProps)(FaceRecognition);