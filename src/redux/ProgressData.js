import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    progressData : []
 }

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    addData(state,action) {
        state.progressData.push(action.payload)
      
    }
  },
})

export const { addData } = progressSlice.actions
export default progressSlice.reducer