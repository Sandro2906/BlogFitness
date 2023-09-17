import React from 'react'
import Apple from "../assets/juices/apple.png"
import Jagoda from "../assets/juices/Strawberry-Juice-Transparent-PNG.png"
import Multi from "../assets/juices/fruit-cocktail-juice-png-6.png"
import Limun from '../assets/juices/pngtree-summer-orange-juice-png-image_9054080.png'
import Narandza from '../assets/juices/pngtree-summer-drink-mint-lemonade-png-image_7218399.png'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Sokovi = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const data = [
        {
            id:1,
            name: "Jabuka",
            picture: Apple,
            style: "w-[400px]",
            gardient: "bg-gradient-to-r from-white via-yellow to-white"
        },
        {
            id:2,
            name: "Jagoda",
            picture: Jagoda,
            style: "w-[300px]",
            gardient: "bg-gradient-to-r from-white via-red to-white"

        },
        {
            id:3,
            name: "Multi",
            picture: Multi,
            style: "w-[700px]",
            gardient: "bg-gradient-to-r from-white via-purple to-white"
        },
        {
            id:4,
            name: "Limun",
            picture: Narandza,
            style: "w-[400px]",
            gardient:"bg-gradient-to-r from-white via-yellow to-white"
        },
        {
            id:5,
            name: "Narandza",
            picture: Limun,
            style: "w-[600px]",
            gardient :"bg-gradient-to-r from-white via-orange to-white"
        },
    ]
    

  return (
  
    <Carousel responsive={responsive} className='w-full h-auto border-t-4 border-b-4 border-black'>
    
    {
        data.map(({name,id,picture,style, gardient})=>(
            <div name="Sokovi" key={id} className={`w-full h-screen flex flex-col justify-center items-center ${gardient}`}>

            <div className={`w-full h-auto justify-center items-center flex flex-grow`}>
                <img src={picture} alt='slika' className={`${style}`} />
            </div>
            
            <div className='w-full h-[100px] flex justify-center items-center'>
                    <h1 className='md:text-9xl text-6xl pb-20 font-niceFont font-semibold shadows2'>{name}</h1>
            </div>

        </div>
        ))
    }
       


        </Carousel>

  )
}

export default Sokovi