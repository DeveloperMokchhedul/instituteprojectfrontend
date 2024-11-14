import { configureStore } from '@reduxjs/toolkit'
import user from './slice/userSlice.js'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, user)

export const store = configureStore({
  reducer: {
    user:persistedReducer

  },

})
export const persistor = persistStore(store)