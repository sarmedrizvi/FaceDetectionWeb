import React from 'react'
import { connect } from 'react-redux'
import './ImageLinkForm.css'
import { InputText, InputUrl } from '../../Redux/Input-Redux/Input.Action'
import { ButtonClicked } from '../../Redux/SqaureBox-Redux/SquareBox.Action';
import Clarifai from 'clarifai';
import { UserChange } from '../../Redux/Route/User/User-Action';


const app = new Clarifai.App({
    apiKey: '0c91da893dce4c12be0e9461cc7b4567'
});
const calculateBox = (response) => {

    const arr = response.outputs[0].data.regions;
    const image = document.getElementById('faceImage')
    const box = arr.map(item => {
        const clarifai = item.region_info.bounding_box;
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: clarifai.left_col * width,
            topRow: clarifai.top_row * height,
            rightCol: width - (clarifai.right_col * width),
            bottomRow: height - (clarifai.bottom_row * height)
        }
    })

    return box;

}


const ImageLinkForm = ({ InputText, URL, Text, ButtonClicked, user, userChanging,box }) => {

    function onPictureSubmit() {
        URL(Text);
        app.models.predict(Clarifai.FACE_DETECT_MODEL, Text).then(
            function (response) {
                const size = calculateBox(response);
                ButtonClicked(size)
                if (response) {
                    fetch('https://pacific-beyond-35810.herokuapp.com/image', {
                        method: 'put',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: user.id
                        })
                    })
                        .then(response => response.json())
                        .then(data => {
                            userChanging({ ...user, entries: data })
                        })
                }

            }
        );
    }

    return (
        <div>
            <h4 className='f3'>{'This Magic Brain will detect face in your picture. Give it a try'}</h4>
            <div className='center'>
                <div className=' center form pa4 br3 shadow-5'>
                    <input type='text' className='f4 pa2 w-70 center' onChange={InputText} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={()=>{onPictureSubmit();box([{}])}}
                    >Detect</button>
                </div>
            </div>
        </div>


    )


}


const mapStateToProps = state => ({
    Text: state.InputBox.Input,
    user: state.user.user
})


const mapDispatchToProp = (dispatch) => ({

    InputText: InputBox => dispatch(InputText(InputBox)),
    URL: URL => dispatch(InputUrl(URL)),
    ButtonClicked: size => dispatch(ButtonClicked(size)),
    userChanging: userChange => dispatch(UserChange(userChange)),
    box: boxes => dispatch(ButtonClicked(boxes)),
})



export default connect(mapStateToProps, mapDispatchToProp)(ImageLinkForm);