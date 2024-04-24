import { weatherReducer } from './weatherReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: weatherReducer,
})

export default store
