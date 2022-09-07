import React,{useState} from 'react';
function NavBar() {
    const [activeItem, setActiveItem]=useState(0)
    const listNavBar=[{title:'Home', link:'#home'}, {title:'API', link:'#api'}]

    const changeActive=(index:number)=>{
        setActiveItem(index)
    }
    return ( 
        <div className='w-full h-[70px] fixed left-0 top-0 bg-black z-20 flex justify-center'>
            <div className='container mx-auto  bg-black flex items-center'>
           {
            listNavBar.map((item,index)=>
                <div onClick={()=>changeActive(index)} style={index===activeItem?{background:'blue'}:{}} key={item.title}>
                    {
                        <a href={item.link}><h1 className='text-white p-[27px] text-[16px] cursor-pointer select-none'>{item.title}</h1></a>
                    }
                </div>    
            )
           }
           </div>
        </div>
     );
}

export default NavBar;