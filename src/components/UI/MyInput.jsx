import React from 'react';

function MyInput({value, setValue}) {

    return ( 
        <input
            className='p-2 outline-0 text-[18px]'
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder='Поиск...'
        ></input>
     );
}

export default MyInput;