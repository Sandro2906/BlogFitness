import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-auto bg-gray pb-10'>
        <div className='w-full h-32  pt-14 flex items-center drop-shadow-md'>
            <h1 className='text-7xl font-niceFont font-extrabold pl-10 text-white'>Contact</h1>
        </div>
        <div className='flex justify-center items-center pt-3'>
        <form action='https://getform.io/f/68f43bd1-4849-4ca1-8d09-aafcdada77b4' method='POST' className='flex flex-col justify-center items-center w-full md:w-[600px] p-7'>
            <input  placeholder='Ime i prezime' className='w-full h-10 p-3 border-2 border-black rounded '/>
            <input placeholder='e-mail'  className='w-full h-10 p-3 border-2 border-black rounded my-5'/>
            <textarea placeholder='Vasa poruka' rows={10} className='w-full h-auto p-3 border-2 border-black rounded pt-5'/>
            <button className='w-24 h-10 mt-5 border-2 border-white drop-shadow-sm rounded bg-lighterGreen text-white hover:bg-black duration-100'>POSALJI</button>
        </form>
        </div>
    </div>
  )
}

export default Contact