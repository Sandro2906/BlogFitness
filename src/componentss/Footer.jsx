import React from 'react'
import Instagram from '../assets/instagram.png'
import GitHub from '../assets/github.png'
import Linkedin from '../assets/linkedin.webp'
import {Link} from 'react-scroll'

const Footer = () => {
    const data =[
        {
            id:1,
            src: Instagram,
            name: 'Instagram',
            link: 'https://www.instagram.com/sandro_photographyy/'
        },
        {
            id:2,
            src: Linkedin,
            name: 'Linkedin',
            link: 'https://www.linkedin.com/in/sandro-gataric-527964274/'
        },
        {
            id:3,
            src: GitHub,
            name: 'Git',
            link: 'https://www.google.com'

        },
    ]

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
          id:3,
          name: 'Excersise',
          link:'excersise'
        },
        {
          id:4,
          name: 'Contact',
          link:'contact'
        }
      ]

  return (
    <div className='w-full h-auto bg-black flex flex-col md:flex-row md:justify-between '>
    <div className='w-full flex flex-col pt-10 pb-10'>
    <h1 className='text-2xl font-extrabold text-white md:pl-20 px-5 pb-5'>CONTACT</h1>
        {
            data.map(({id,src, name, link})=>(
                <div className='w-full h-15 flex items-center px-5 md:pl-20 py-2 '>
                
                <img key={id} src={src} alt='slika' className='w-10 h-10'/>
                <a href={link}>
                <h1  className='text-white pl-4 cursor-pointer'>{name}</h1>
                </a>
                </div>
                ))
            
        }
        </div>
        
        <div className='w-full h-auto flex flex-col py-10'>
        <h1 className='text-white font-extrabold pb-3 text-2xl pl-5 '>NAVBAR</h1>
        <ul className='flex flex-col'>
        {
         link.map(({id,name,link})=>( 
           <li key={id} className='text-white px-5 py-1 capitalize cursor-pointer'><Link to={link} smooth duration={500}>{link}</Link></li>
         ))
        }
        </ul> 
        
        </div>
        
        <div className='w-full h-auto text-white flex flex-col py-10 px-5'>
        <h1 className='w-full h-auto font-extrabold text-2xl pb-5 top-5'>ABOUT</h1>
            <h1>Thank you for visiting my web site. <br />
            If you have any questions, contact me!<br />
            You can contact me on Instagram, Linkedin or contact form.<br /> <br />
            
            Hvala sto ste posjetili moj web site.<br/>
            Ako imate bilo kakvih pitanja, kontaktirajte me!<br />
            Mozete me kontaktirati na Instagramu, Liknedinu ili kontakt formi!</h1>
        </div>

        <div className='w-full h-auto flex flex-col justify-center text-white px-5 py-10 first-letter:'>
        <h1 className='mb-3'>© 2023 Sandro Portfolio</h1>
        <h1>Privacy Policy</h1>
        <h1>Terms of Service</h1>
        <h1>FAQs or Help Center</h1>
       <Link to='home' smooth duration={500}><h1 className='font-boldText cursor-pointer text-3xl pt-3 relative bottom-0'>BACK TO TOP</h1></Link>
        </div>
    
    </div>
  )}
  export default Footer