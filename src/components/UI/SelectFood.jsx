import React from 'react';


const nation=['Italian', 'France', 'Russian', 'English']
const type=['Dessert', 'Soup', 'Fresh', 'Cold dish']
function SelectFood({value, setValue}) {
    return ( 
        <div>
        <div className='w-fit grid grid-cols-2 bg-slate-800 mt-[100px] text-white rounded-[10px] gap-[10px] p-4'>
            {
                nation.map(el=>
                    <div key={el} onClick={()=>setValue(el)}  className='bg-blue-600 m-2 rounded-[7px] w-[200px] h-[70px] flex items-center justify-center select-none cursor-pointer'>
                        <p className='text-[20px]'>{el}</p>
                    </div>
                )
            }
        </div>
         <div className='w-fit grid grid-cols-2 bg-slate-800 mt-[50px] text-white rounded-[10px] gap-[10px] p-4'>
         {
             type.map(el=>
                 <div key={el} onClick={()=>setValue(el)}  className='bg-blue-600 m-2 rounded-[7px] w-[200px] h-[70px] flex items-center justify-center select-none cursor-pointer'>
                     <p className='text-[20px]'>{el}</p>
                 </div>
             )
         }
     </div>
     </div>
     );
}

export default SelectFood;