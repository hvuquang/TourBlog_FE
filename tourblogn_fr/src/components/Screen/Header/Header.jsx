import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className='Header'>
        <img className='Header_Logo' src={process.env.PUBLIC_URL + '/images/logoTravel.png'} alt='logo'/>
        <div className='Header_Profile'>
            <h3 className='Header_NameProfile'>Vũ Quang Huy</h3>
            <Link to={'/profile'}><img className='Header_icProfile' src={process.env.PUBLIC_URL + '/images/username-removebg-preview.png'} alt='Header_icProfile'/></Link>
        </div>
    </div>
  )
}
