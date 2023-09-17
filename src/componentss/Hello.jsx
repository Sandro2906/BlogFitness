import React from 'react'
import AvatarImage from '../assets/guyTrain.jpg'

const Hello = () => {
  return (
    <div name='home' className='h-auto md:h-screen w-full py-24  justify-center items-center flex '>
    
     <div className='flex-row flex items-center justify-center'>

        <div className='flex flex-col w-full py-10 px-10 justify-center items-center'>
            <p className='italic font-oneFont font-bold drop-shadow-md text-center shadows text-xl md:text-5xl shadow-white'>Gym, Food, Fitness and Yoga</p>
            <h1 className='font-bold font-niceFont md:text-9xl text-6xl text-center shadowl'>SHAPE YOURSELF</h1>
            <p className='pt-7 md:w-2/3 font-oneFont text-center md:text-xl text-xl shadowm'>"Build Your Best Shape: 
            Consistent gym workouts targeting strength and cardio.
            Combine proper form, balanced nutrition, and ample rest for optimal results."</p>
        </div>

     <div className='absolute -z-10 w-full h-screen'>
        <img src={AvatarImage} className=' w-full h-full blur bg-black object-cover'/>
     </div>

    </div>
    </div>
  )
}

export default Hello