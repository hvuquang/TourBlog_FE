
import React, { Component } from 'react'
import './BackGround.css'

export default class BackGround extends Component {
  render() {
    return (
        <center><div className='mainbackground'>{this.props.children}</div></center>
    )
  }
}

