import { createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import calculateReducer from './calculateReducer'

const store = configureStore({
    reducer: {
        counter: calculateReducer,
        profile: calculateReducer
    }
})

export default store

