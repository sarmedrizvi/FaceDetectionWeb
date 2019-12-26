import React from 'react'
import { connect } from 'react-redux'
import './ImageLinkForm.css'
import InputText from '../../Redux/Input-Redux/Input.Action'
const ImageLinkForm = ({InputText,onButtonSubmit}) => (
    <div>
        <h4 className='f3'>{'This Magic Brain will detect face in your picture. Give it a try'}</h4>
        <div className='center'>
            <div className=' center form pa4 br3 shadow-5'>
                <input type='text' className='f4 pa2 w-70 center' onChange={InputText} />
                {console.log(Text)}
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
    </div>

)
// const mapStateToProps=state=>({
//   Text:state.InputBox.Input
// })
const mapDispatchToProp=(dispatch)=>({
    InputText: InputBox=>dispatch(InputText(InputBox))
})
export default connect(null,mapDispatchToProp)(ImageLinkForm);