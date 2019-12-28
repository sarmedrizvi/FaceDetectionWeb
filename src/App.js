import React from 'react';
import './App.css';
// import { connect } from 'react-redux'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImagLinkForm'
import Rank from './Components/Rank/Rank'
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';




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


const App= () =>{
    return (
      <div className='App'>
        <Particles params={params} className='particles' />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm  />
        <FaceRecognition/>
      </div>
    );
  }


// const mapStateToProps = state => ({
//   imageUrl: state.InputBox.Input
// })


export default App;
