import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Routes from './Routes'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    )
  }
}

export default App 