import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IRecipe } from '../../types';


export const NutritionAPI = createApi({
    reducerPath:'nutritionAPI',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://api.api-ninjas.com/v1/'
    }),
    endpoints:(build)=>({
        fetchNutrition:build.query<IRecipe[], string>({
            query:(query)=>({
                method:'GET',
                url:'recipe?query='+query,
                headers:{ 'X-Api-Key': 'zRsJYicY2Hjq3D8FvT6mbGiaLQMfbIBTT5kYhG4j'},
                params:{}
            })
        })
    })
}) 