import React from 'react'
import { connect } from 'react-redux'
import './FaceRecognition.css';
const FaceRecognition = ({ URL, size }) => (
    <div className='center'>
        <div className='absolute mt2'>
            <img id='faceImage' src={URL} alt='' width='500px' height='auto'></img>
          {size.map(box=> <div className='bounding-box' style= {{ top:box.topRow, right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}></div> )}  
        </div>
        {console.log(size)}
    </div>
)
const mapStateToProps = (state) => ({
    
    URL: state.InputBox.URL,
    size: state.size.size
   
})
export default connect(mapStateToProps)(FaceRecognition);