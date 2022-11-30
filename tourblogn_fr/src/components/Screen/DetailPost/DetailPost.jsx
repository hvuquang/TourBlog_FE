import React from 'react'
import './DetailPost.css'
import Header from '../Header/Header'

export default function DetailPost() {
  return (
    <div className='DetailPost'>
        <Header/>
        <div className='DetailPost__body'>
            <div className='DetailPost__User'>
                <img className='DetailPost__User--icProfile' src={process.env.PUBLIC_URL + '/images/username-removebg-preview.png'} alt='Header_icProfile'/>
                <h3>Vũ Quang Huy</h3>
            </div>
            <div className='DetailPost__Image'>
                <img className='DetailPost__Image--imgMain' src={process.env.PUBLIC_URL + '/images/username-removebg-preview.png'} alt='Header_icProfile'/>
                <div className='DetailPost__Image--imgMini'>
                    <img className='DetailPost__Image--img' src={process.env.PUBLIC_URL + '/images/username-removebg-preview.png'} alt='Header_icProfile'/>
                    <img className='DetailPost__Image--img' src={process.env.PUBLIC_URL + '/images/username-removebg-preview.png'} alt='Header_icProfile'/>
                </div>
            </div>
            <div className='DetailPost__content'>
                <h3 className='DetailPost__content--title'>Chuyến đi Phú Quốc</h3>
                <p className='DetailPost__content--description'>Gần đây chúng tôi có đi du lịch phú quốc, tôi thấy cảnh ở đây rất đẹp</p>
            </div>
        </div>
    </div>
  )
}
