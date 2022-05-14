import React ,{useState}from 'react'
import { createdata } from '../redux/features/PostSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const CreatePost = () => {

    const [inputs, setinputs] =useState({
       
        title:'',
        body:''

    })
    const handlesubmit=(e)=>{
        e.preventDefault()
    }

    const handlechange=(e)=>{
        setinputs((prevestate)=>({
            ...prevestate,
            [e.target.name]:e.target.value
        }))
    }
    //console.log(inputs)
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const adddata=()=>{
       // console.log(inputs)
        dispatch(createdata(inputs))
       


    }

const {post} = useSelector((state)=>state.app)
console.log(post)

  return (
    <div className='container '>
        <form action="" onSubmit={handlesubmit}>
       
        <input type="text" name='title' placeholder='title' className='mt-5' onChange={handlechange}  value={inputs.title}  /><br /> <br />
        <textarea name="body" id="" cols="30" rows="10" placeholder='body' onChange={handlechange}  value={inputs.body}  ></textarea> <br /><br />
        <button className='btn- btn-info' onClick={adddata}>add post</button> 
        <button className='btn- btn-primary' onClick={()=>navigate('/')} >go back</button>
        </form>

{
    post.map((item)=>{
        return(
            <div className="container">
               

               <div className="card" style={{ width: '18rem'}}>
  <div className="card-body">
    <h4 className='card-title'>{item.data.id}</h4>
    <h5 className="card-title">{item.data.title}</h5>
    <p className="card-text">{item.data.body}</p>
    
  </div>
</div>






            </div>
        )
    })
}
       
     
    </div>
  )
}

export default CreatePost
