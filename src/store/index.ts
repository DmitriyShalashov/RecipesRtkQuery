import {combineReducers,configureStore } from '@reduxjs/toolkit'
import { NutritionAPI } from './services/NutritionService'


const roorReducer=combineReducers({
    [NutritionAPI.reducerPath]:NutritionAPI.reducer
})

export const setupStore = () =>{
    return configureStore({
        reducer:roorReducer,
        middleware:(gtm)=>gtm().concat(NutritionAPI.middleware)
    })
}