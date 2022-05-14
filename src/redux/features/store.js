import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./PostSlice";
const store= configureStore({
    reducer:{
        app: PostSlice
    }
})
export {store}