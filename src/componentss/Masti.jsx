import React from 'react'
import losos from '../assets/lososBg.jpg'
import mliijecniPr from '../assets/mlijecniProizvodi.webp'
import tamnaCok from '../assets/tamnaCokolada.jpg'
import Tuna from '../assets/tuna.jpg'
import Orasasti from '../assets/orasastiPlodovi.jpg'


const Masti = () => {

    const data = [
        {
            id:1,
            name:'Losos',
            src: losos
        },
        {
            id:2,
            name:'Tamna cokolada',
            src: tamnaCok
        },
        {
            id:3,
            name:'Tuna',
            src: Tuna
        },
        {
            id:4,
            name:'Orasasti plodovi',
            src: Orasasti
        },
        {
            id:5,
            name:'Mlijecni proizvodi',
            src: mliijecniPr
        },
    ]

  return (
    <div name='Masti' className='w-full h-auto'>
    <div className='w-full h-auto md:h-96 items-center justify-center flex'>
    <h1 className='absolute shadowblack text-white font-extrabold text-7xl md:text-9xl font-niceFont text-amber-300 z-20 drop-shadow-lg'>MASTI</h1>
    <img src={losos} alt='Slika lososa' className='w-full h-auto md:h-96 object-cover blur-sm  border-t-2 border-b-2 border-black'/>
    </div>
        <div className='w-full h-auto justify-center items-center flex flex-col'>
            <h1 className='h-20 pt-11 text-7xl font-niceFont font-extrabold'>INFO</h1>
            <p className='px-10 font-oneFont text-xl md:text-2xl py-10'> Masnoće su ključni sastojak naše ishrane i igraju važnu ulogu u našem zdravlju i fitness ciljevima. Iako su masti često povezivane s debljanjem i lošim zdravljem, istina je da su neke masti esencijalne za naš organizam i imaju pozitivan uticaj na našu kondiciju.

           <br /> <br /> Postoje različite vrste masti:
            
           <br /> <br />  1. Zasićene masti: Ove masti su često prisutne u životinjskim proizvodima kao što su meso, mleko i mlečni proizvodi. Prekomerni unos zasićenih masti može povećati nivo holesterola u krvi i povećati rizik od srčanih bolesti. Zbog toga se preporučuje umjeren unos ovih masti.
            
           <br />  2. Nezasićene masti: Ove masti se nalaze u biljnim uljima, orašastim plodovima, semenkama i masnoj ribi. Nezasićene masti se smatraju zdravijim izborom jer mogu pomoći u smanjenju rizika od srčanih bolesti, poboljšanju nivoa holesterola i podržavanju zdravlja mozga.
            
           <br />  3. Trans masti: Ove masti su rezultat procesa hidrogenacije i prisutne su u nekim prerađenim namirnicama, kao što su brza hrana i grickalice. Trans masti se smatraju štetnim i trebalo bi ih izbjegavati što je više moguće, jer mogu povećati rizik od srčanih bolesti i drugih zdravstvenih problema.
            
           <br />  4. Omega-3 masne kiseline: Ove masne kiseline se nalaze u masnoj ribi poput lososa, sardina i skuše. One imaju pozitivan uticaj na zdravlje srca, podržavaju upalne procese, poboljšavaju funkciju mozga i podržavaju opšti dobrobit.
            
           <br /> <br />   Kada je riječ o fitnes ciljevima, masti su važne jer pružaju dugotrajnu energiju i pomažu u održavanju hormonske ravnoteže. Takođe, određene masti, poput omega-3 masnih kiselina, mogu ubrzati oporavak nakon treninga, smanjiti upale i podržati rast mišića.
            
            Važno je napomenuti da se, bez obzira na ciljeve, ključ nalazi u uravnoteženom unosu masti i biranju zdravih izvora. Umjereno konzumiranje nezasićenih masti, kao što su avokado, orašasti plodovi i maslinovo ulje, može vam pomoći da podržite svoje fitness ciljeve i održavate optimalno zdravlje.</p>
        </div>

    <div className='flex pt-7 pb-7 flex-col md:flex-row w-full md:py-10 md:h-60 bg-lighterGreen justify-around items-center'>
    {
        data.map(({id,name,src})=>(
            <div key={id} className='flex flex-col text-white items-center my-5 mx-3 md:my-0 justify-center shadow-lg rounded-md hover:scale-110 duration-150'>
                <div className='w-60 h-40 flex justify-center items-center'>
                <img  src={src} alt='Hrana' className='w-full h-full rounded-md'/>
                </div>
                <div className='w-full pb-3 h-10 flex justify-center items-center'>
                
                <h3 className='text-center font-niceFont text-2xl'>{name}</h3>
                
                </div>
            </div>

        ))
    }
    
    </div>

</div>
  )
}

export default Masti