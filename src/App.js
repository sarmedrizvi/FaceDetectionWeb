import React from 'react';
import './App.css';
import {connect } from 'react-redux'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImagLinkForm'
import Rank from './Components/Rank/Rank'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';


const app = new Clarifai.App({
  apiKey: '0c91da893dce4c12be0e9461cc7b4567'
 });
 
function App({URL}) {
  const params = {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800
        }
      }

    }
  }
  let imageUrl=URL;
  const onButtonSubmit = () => {
    imageUrl=URL;
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", URL).then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
      },
      function(err) {
        // there was an error
      }
    );
  }
  
  return (
    <div className='App'>
      <Particles params={params} className='particles' />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onButtonSubmit={onButtonSubmit}
      />
      <FaceRecognition imageUrl={imageUrl}/>
    </div>
  );
}
const mapStateToProps=state=>({
  URL:state.InputBox.Input
})
export default connect(mapStateToProps)(App);
