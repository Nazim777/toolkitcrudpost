import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletepost } from '../redux/features/PostSlice'

const Card = () => {


  
 
 const {post}=useSelector((e)=>e.app)
 console.log(post)



 const dispatch= useDispatch()
const deletepostdata= ()=>{
  dispatch(deletepost(post.id))
} 



  return (
    <div>



<div className="card" style={{ width: '18rem'}}>
  <div className="card-body">
    <h4 className='card-title'>{post.id}</h4>
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    <button className='btn btn-info' onClick={deletepostdata}>delete</button>
    <button className='btn btn-primary'>edit</button>
    
  </div>
</div>









      

      
    </div>
  )
}

export default Card
