import React,{useState} from 'react'
import "./AddPost.css"
import add_post_img from "./add_post_img.png"
import Axios from 'axios'

function AddPost() {
    const [title , setTitle] = useState();
    const [des , setDes] = useState();
    const [img,setImg] = useState();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('des', des);
    formData.append('imgURLs', img)
    
    const submitHandler = ()=>{
        Axios.post("http://localhost:8000/v1/post/addPost", 
            formData
        )
    }
    console.log(formData.get('imgURLs'));
    console.log(formData)
    console.log([...formData])
  return (
    <div className='add_post'>
        <div className='title'>Tiêu đề:</div>
        <input type='text' className='input_title' onChange={(event)=>{setTitle(event.target.value)}}/>
        <div className='title'>Viết blog:</div>
        <input type='text' className='input_des' onChange={(event) => { setDes(event.target.value) }}/>
        <section>
            <label>
                <img className='add_post_img' src={add_post_img} alt=''/>
                <input
                    className='input_add_img'
                    type='file'
                    name='images'
                    onChange={(event)=>{setImg(event.target.files[0])}}
                    multiple
                    accept='image/png , image/jpeg '
                />
            </label>
        </section>
        {/* show image */}
        <div className='img_selected'></div>
        <div className='add_post_btn' onClick={submitHandler}>
            Đăng bài
        </div>
    </div>
  )
}

export default AddPost
