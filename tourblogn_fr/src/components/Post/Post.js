import React,{useState,useEffect} from 'react'
import "./Post.css"
import like from "./like.png";
import Delete from "./delete.png"
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Post() {
    const [postList,setPostList] = useState([])
    useEffect(()=>{
        Axios.get('http://localhost:8000/v1/post/readPost').then((respone) => setPostList(respone.data))
    },[])
    
    const likeHandle = (id)=>{
        window.location.reload()
        Axios.put('http://localhost:8000/v1/post/likePost',{
            _id : id
        })
    }
  return (
    <div className='grid'>
        {postList.map((post,key)=>{
            const imgList = post.imgURLs.split(",")[0];
            const img_url = "http://localhost:8000/"+imgList;
            return <Link to={"/detailpost"}><div className='post' key={key}>
                <img className='post_img' src={img_url} alt='' />
                    <div className='post_title'>{post.title}</div>
                    <div className='post_content'>{post.des} <strong className='read_more'>...read more</strong></div>
                    <div className='post_react_flex'>
                        <div className='post_icon_like'>
                            <img className='img_like' onClick={()=>likeHandle(post._id)} src={like} alt='' />
                            <div className='text_like_flex'>
                                <div className='text_like'>Like</div>
                                <div className='text_like'>{post.like}</div>
                            </div>
                        </div>
                        <div className='post_icon_like'>
                            <img src={Delete} alt='' />
                            <div className='text_like1'>Delete</div>
                        </div>
                    </div>
                </div>
                </Link>
            
        })}
    </div>
    
  )
}

export default Post
