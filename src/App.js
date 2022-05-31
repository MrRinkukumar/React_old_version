

import React, { Component } from 'react'
import Navbar from './Componant/Navbar';
import News from './Componant/News';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
