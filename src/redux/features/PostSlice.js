import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getpost= createAsyncThunk('post/getpost',async(id)=>{
    const {data}= await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return data
})


export const deletepost= createAsyncThunk('/post/deletepost', async(id)=>{
  return  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
})

export const createdata=createAsyncThunk('/post/createdata',async(inputs)=>{
    const res= await axios.post(`https://jsonplaceholder.typicode.com/posts/`,inputs
       
    )
    return res
})




const postslice= createSlice({
    name: 'app',
    initialState:{
        loading:false,

        post:[],
        error: null,
        body: '',
        edit:null
    },
    reducers:{

        

    },
    extraReducers:{
    [getpost.fulfilled] :(state, action)=>{
        state.post=action.payload
       // console.log(state.post)
    },
    [deletepost.fulfilled] :(state,action)=>{
        state.post=action.payload
        console.log(state.post)
    },
    [createdata.fulfilled]: (state, action)=>{
        state.post= [action.payload]
        console.log(state.post)

    }




       
    }



})

export default postslice.reducer