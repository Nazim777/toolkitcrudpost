import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { getpost } from '../redux/features/PostSlice'
import { useDispatch } from 'react-redux'
import Card from './Card'
const Home = () => {
  const [id, setid]  = useState('')
  const dispatch= useDispatch()
  
  const fetchpost= ()=>{
    dispatch(getpost(id))
    setid('')

  }

  
  const navigate= useNavigate()
  return (
    <div className='container'>
       <div className="container">
        <input type="text" value={id} onChange={(e)=>setid(e.target.value)} className='my-5' placeholder='user id' /> <br />
        <button onClick={fetchpost} className='btn btn-info my-2' >fetch post</button> 
        <button onClick={()=>navigate('/createpost')} className='btn btn-primary'>create post</button>

       </div>

       <Card/>
       

       

      
    </div>
  )
}

export default Home
