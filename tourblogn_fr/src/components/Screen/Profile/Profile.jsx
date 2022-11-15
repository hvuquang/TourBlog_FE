import React from 'react'
import './Profile.css'
import Header from '../Header/Header'

export default function Profile() {
  return (
    <div className='Profile'>
    <Header/>
        <div className='Profile_section'>
            <div className='Profile_header'>
                <img className='Profile_header_icon' src={process.env.PUBLIC_URL + '/images/username-removebg-preview.png'} alt='Profile_header_icon'/>
                <h2 className='Profile_header_name'>Vũ Quang Huy</h2>
            </div>
            <div className='Profile_content'>
                <p className='Profile_information'>Số lượng bài đăng: 10</p>
                <p className='Profile_information'>Số điện thoại: 0123456789</p>
                <p className='Profile_information'>Email: abc@gmail.com</p>
                <div className='Profile_contact'>                  
                    <img className='Profile_contact1' src={process.env.PUBLIC_URL + '/images/instagram.png'} alt='Profile_contact_instagram'/>
                    <img className='Profile_contact2' src={process.env.PUBLIC_URL + '/images/facebook.png'} alt='Profile_contact_facebook'/>
                </div>
            </div>
            <div className='Profile_Logout'>
                <button className='Button_Logout'>
                    Đăng xuất
                </button>
            </div>
            
        </div>
    </div>
  )
}
