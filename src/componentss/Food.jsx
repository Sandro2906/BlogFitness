import React from 'react'
import Proteini from '../assets/proteini.jpg'
import Hidrati from '../assets/hidrati.jpg'
import Masti from '../assets/masti.jpg'
import Sok from '../assets/sok.jpg'
import { Link } from 'react-scroll'
const Food = () => {

    const link = [
        {
            id:1,
            link:'Proteini',
            src: Proteini
        },
    {
        id:2,
        link:'Masti',
        src: Masti
    },
    {
        id:3,
        link:'Hidrati',
        src: Hidrati
    },
    {
        id:4,
        link:'Sokovi',
        src: Sok
    },

    ]

  return (
    <div name='food' className='w-full bg-lighterGreen pt-20 mx-auto my-auto pb-20'>
    <div className='w-full h-25 pr-3'>
    <h1 className='text-7xl font-niceFont text-white pl-10 font-extrabold text-amber-300 drop-shadow-lg'>Ishrana</h1>
    <p className='pl-10 pt-2 font-oneFont text-xl pb-8'>Za vise informacija o ishrani kliknite na fotografiju koja vas zanima.</p>
    </div>
    
        <div className='grid md:grid-cols-2 gap-5 px-10 sm:grid-cols-2'>
      {
        link.map(({id, src, link})=>(
          <Link to={link} smooth duration={500}>
                <div key={id} className='w-100 h-80 flex justify-center shadow-sm shadow-black rounded-md hover:scale-105 duration-150 items-center cursor-pointer'>
                        <h1 className='absolute text-5xl text-white font-extrabold font-niceFont text-amber-300 drop-shadow-lg'><Link to={link} smooth duration={500}>{link}</Link></h1>
                        <img src={src} alt='Slika' className='w-full h-full object-cover rounded-md' /> 
                    </div>
                    </Link>
        ))
      }
        </div>
    </div>
  )
}

export default Food