
import React, { Component } from 'react'
import './background.css'

export default class background extends Component {
  render() {
    return (
        <center><div className='mainbackground'>{this.props.children}</div></center>
    )
  }
}

