import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Feature/Counter/CounterSlice'

export const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})