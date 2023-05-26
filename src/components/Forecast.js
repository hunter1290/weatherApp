import React, { useState } from 'react'
import './Footer.css'
function Forecast({title,weather}) {

  return (
    <div>
         
         <div className="flex items-center justify-start mt-6">
          <p className='text-white font-medium uppercase'>{title}</p>
         </div>
           <hr className='my-6'/>
           <div className="flex flex-row items-center justify-between text-white">
            
            {  weather.map(temp=>(
                 <div key={temp.tz} className="flex flex-col items-center justify-center">
              <p className='font-light text-sm'>
               {temp.title}
                <br />
                {temp.title_day}
              </p>
             <img src={temp.icon} alt="imghere" className='w-12 my-1'/>
             <p className='font-medium'>{temp.weather}</p>
             <p className='font-medium'>{(temp.temp -273).toFixed()}°C</p>
             </div>
            ))}


             
           </div>
    </div>
  )
}

export default Forecast