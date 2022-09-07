import React, {useState} from 'react';
import { NutritionAPI } from '../../store/services/NutritionService';
import MyInput from '../UI/MyInput';
import SelectFood from '../UI/SelectFood';

function RecipeList() {
    const [value, setValue]=useState('Italian')
    const {data:food}=NutritionAPI.useFetchNutritionQuery(value)
    const [activeCard, setActiveCard]=useState(-1)

    
    const changeActiveCard=(index)=>{
        activeCard===index
        ?setActiveCard(-1)
        :setActiveCard(index)
    }
    return ( 
        <div id='home' className='w-full h-screen bg-white mt-[100px] flex justify-center'>
           
            <div className='container mx-auto relative'>
                
                <div className='flex items-center border border-black w-[300px]  absolute top-[]'><img className='w-[25px] h-[25px] mr-[10px] ml-[10px] '
                src='https://img.icons8.com/ios-glyphs/344/search--v1.png'
                alt=''></img><MyInput value={value} setValue={setValue}/></div>
                <div className='right-[0px] w-[500px] absolute'>
                {
                food
                ?<h1 className='text-[24px] font-medium'>{
                    food.length
                    ?'По вашему запросу найдено '+food.length+' результатов'
                    :'По вашему запросу ничего не найдено'
                }</h1>
                :<h1 className='text-[24px] font-medium'>Идёт загрузка...</h1>
                }
                {   food?.map((item,index)=>
                    <div className=' mt-[20px] border w-[600px] ' key={index} >
                        <h3 className='text-[18px] font-medium text-indigo-400 cursor-pointer select-none' onClick={()=>changeActiveCard(index)} >{item.title}</h3>
                        <p className='text-[17px] '>{item.servings}</p>
                        <div style={index===activeCard?{display:'block'}:{display:'none'}} className='mt-[15px] flex justify-between'>
                           <div>{item.ingredients.split('|').map((str, i)=>
                               <p className='font-light text-[15px]' key={i}>{str}</p> 
                            )}</div>
                            <div>{
                                <p className='font-light text-[15px]'>{item.instruction}</p>
                            }</div>
                        </div>
                    </div>    
                )
                }
                </div>
                <SelectFood value={value} setValue={setValue}/>
            </div>
        </div>
     );
}

export default RecipeList;