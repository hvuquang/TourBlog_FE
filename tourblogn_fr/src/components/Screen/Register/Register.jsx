import React, { Component } from 'react'
import './Register.css'
import BackGround from '../../background/background'
import Button from '../../Button/Button'
import TextInput from '../../TextInput/TextInput'
import Links from '../../Link/Link'
import InputNoneIMG from '../../InputNoneIMG/InputNoneIMG'
import { Link} from 'react-router-dom'

export default class Register extends Component {
  render() {
    return (
      <BackGround>
       <img id='logo' src={process.env.PUBLIC_URL + '/images/logoTravel.png'} />
        <InputNoneIMG name="Username" input="text"/>
        <InputNoneIMG name="Password" input="password"/>
        <InputNoneIMG name="Verify Password" input="password"/>
        <InputNoneIMG name="Email" input="email"/>
        <Button>Create Account</Button>
      <Link to={"/login"}><Links content="Already have account? Log In"/></Link>
      </BackGround>
    )
  }
}
