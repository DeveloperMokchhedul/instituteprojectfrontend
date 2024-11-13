import { configureStore } from '@reduxjs/toolkit'
import progressSlice from "../redux/ProgressData.js"
const store = configureStore({
  reducer:{
    progress:progressSlice
  },

})

export default store