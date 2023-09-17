import React, { useState } from 'react'
import '../index.css'
import {Link} from 'react-scroll'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {


  const link = [
    {
      id:1,
      name: 'Home',
      link:'home'
    },
    {
      id:2,
      name: 'Food',
      link:'food'
    },
    {
      id:4,
      name: 'Contact',
      link:'contact'
    }
  ]

  const [nav,setNav] = useState(false);
  return (
    <div className='w-full h-20 fixed bg-lighterGreen flex items-center justify-between pl-4 pr-4 z-50'>
          <div>
            <h2 className='text-6xl font-niceFont font-semibold pl-3'>StayFit</h2>
            </div>
           
            <ul className='hidden md:flex'>
           {
            link.map(({id,name,link})=>( 
              <li key={id} className='pr-7 hover:scale-150 duration-75 font-niceFont text-xl capitalize cursor-pointer'><Link to={link} smooth duration={500}>{link}</Link></li>
            ))
           }
           </ul> 
            <div onClick={()=> setNav(!nav)} className='md:hidden z-10 lg:hidden flex cursor-pointer pr-4'>
                {nav ? <FaTimes /> : <FaBars /> }
            </div>
            {
              nav && (
                <ul className='flex bg-gradient-to-b from-lighterGreen to-white absolute left-0 top-0 flex-col w-full h-screen items-center justify-center'>
                {
                  link.map(({id,name,link})=>( 
                    <li key={id} className='py-3 shadowl text-4xl capitalize font-niceFont font-semibold cursor-pointer'>
                    <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>
                    
                  ))
                 }
                </ul>
              )
            }
    </div>
  )
}

export default Navbar