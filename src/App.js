import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImagLinkForm'
import Rank from './Components/Rank/Rank'
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import SignIn from './Components/Forms/SignIn';
import Register from './Components/Forms/Register';




const params = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }

  }
}



const App = ({ route }) => {

// fetch('http://localhost:3000/')
// .then(response=> response.json())
// .then(console.log)


  return (
    <div className='App' >
      <Particles params={params} className='particles' />
      <Navigation />


      {
        route === 'home' ?

          < div >
            <Logo />
            <Rank />
            <ImageLinkForm />
            <FaceRecognition />
          </div >


          :

          route === 'signin' ?

            <div >

              <SignIn />
            </div>
            :
            <div >

              <Register />
            </div>

      }
    </div>
  )


}


const mapStateToProps = state => ({
  route: state.routeChange.Route
})


export default connect(mapStateToProps)(App);
