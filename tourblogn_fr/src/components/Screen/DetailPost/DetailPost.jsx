import React from 'react'
import './DetailPost.css'
import Header from '../Header/Header'
import { useLocation } from 'react-router-dom'
import store from '../../../redux/store';

export default function DetailPost(props) {
    const {title} = useLocation().state;
    const {des} = useLocation().state;
    const {imgURLs} = useLocation().state;
    console.log(title);
    console.log(des);
    console.log(imgURLs);
  return (
    <div className='DetailPost'>
        <Header />
        <div className='DetailPost__body'>
            <div className='DetailPost__User'>
                <img className='DetailPost__User--icProfile' src={process.env.PUBLIC_URL + '/images/username-removebg-preview.png'} alt='Header_icProfile'/>
                <h3>Vũ Quang Huy</h3>
                {/* {store.getState().auth.login.currentUser == null ? <h3>NULL</h3> : <h3>{store.getState().auth.login.currentUser.userName}</h3>} */}
            </div>
            <div className='DetailPost__Image'>
                <img className='DetailPost__Image--imgMain' src={imgURLs} alt='Header_icProfile'/>
            </div>
            <div className='DetailPost__content'>
                <h3 className='DetailPost__content--title'>{title}</h3>
                <textarea disabled className='DetailPost__content--description'>{des}</textarea>
            </div>
        </div>
    </div>
  )
}
