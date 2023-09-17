import React from 'react'
import Banane from '../assets/banana.jpg'
import Hljeb from '../assets/hljeb.jpg'
import Makarone from '../assets/makarone.png'

const Hidrati = () => {

    const data = [
        {
            id:1,
            name:'Banane',
            src: Banane,

        },
        {
            id:2,
            name:'Hljeb',
            src: Hljeb
        },
        {
            id:3,
            name:'Makarone',
            src: Makarone,
      
        }
    ]

  return (
    <div name='Hidrati' className='w-full h-auto'>
    <div className='w-full  h-auto md:h-96 items-center justify-center flex'>
    <h1 className='absolute shadowblack font-niceFont text-white font-extrabold text-7xl md:text-9xl text-amber-300 z-20 drop-shadow-lg'>HIDRATI</h1>
    <img src={Makarone} alt='Slika piletine' className='w-full blur-sm h-auto md:h-96 object-cover border-t-2 border-b-2  border-black'/>
    </div>
        <div className='w-full h-auto justify-center items-center flex flex-col'>
            <h1 className='h-20 pt-11 font-niceFont text-7xl font-extrabold'>INFO</h1>
            <p className='px-10 font-oneFont  text-2xl py-10'> 
            Ugljikohidrati su ključni nutrijenti koji igraju važnu ulogu u svijetu fitnessa i tjelesne aktivnosti. Oni su jedan od osnovnih izvora energije za tijelo, posebno za mišićnu aktivnost. Ugljikohidrati se razgrađuju u organizmu u glukozu, koja se zatim koristi kao gorivo za mišiće tijekom vježbanja.

Važno je razumjeti da ne postoje "dobri" i "loši" ugljikohidrati, već se radi o vrstama i količinama koje unosimo u prehranu. Postoje složeni i jednostavni ugljikohidrati:
<br /> <br />
1. Složeni ugljikohidrati: Ovi ugljikohidrati se sporo razgrađuju u tijelu, što omogućava postupno otpuštanje glukoze u krvotok. To pruža konstantan izvor energije tijekom dužeg vremenskog razdoblja. Namirnice bogate složenim ugljikohidratima uključuju cjelovite žitarice poput smeđe riže, kvinoje, integralnog kruha te povrće i mahunarke.
<br />
2. Jednostavni ugljikohidrati: Ovi se brzo razgrađuju u tijelu i brzo povećavaju razinu glukoze u krvi. Najbolje ih je konzumirati u malim količinama ili kombinirane s drugim nutrijentima kako bi se izbjegli nagli skokovi i padovi energije. Primjeri uključuju voće, med i slatkiše.
<br /> <br />
Ugljikohidrati igraju ključnu ulogu u obnovi glikogena, koji je pohranjena forma glukoze u mišićima i jetri. Nakon intenzivnog vježbanja, razina glikogena može biti niska, stoga je važno unositi dovoljno ugljikohidrata kako bi se obnovile zalihe energije.
<br /><br />
Pravilno upravljanje unosom ugljikohidrata važno je za postizanje fitness ciljeva. Aktivni pojedinci, kao i sportaši, često će prilagoditi unos ugljikohidrata prema svojim potrebama. U razdobljima intenzivnog treninga, povećat će unos kako bi osigurali dovoljno energije za izvedbu i oporavak. U fazama smanjenog treninga ili ciljevima mršavljenja, mogli bi smanjiti unos kako bi potaknuli tijelo da koristi pohranjene masti kao gorivo.
<br /><br />
Sve u svemu, ugljikohidrati su neophodni za uspješno sudjelovanje u svijetu fitnessa. Ključno je pravilno odabrati vrste i količine ugljikohidrata te ih uskladiti s vlastitim ciljevima i razinom aktivnosti.
            </p>
        </div>

    <div className='flex pt-7 pb-7 flex-col md:flex-row w-full md:h-60 bg-lighterGreen justify-around items-center'>
    {
        data.map(({id,name,src})=>(
            <div key={id} className='flex mx-5 my-5 flex-col text-white items-center justify-center shadow-lg rounded-md  hover:scale-110 duration-150'>
                <div className='w-60 h-40 flex items-center justify-center'>
                <img  src={src} alt='Hrana' className='w-full h-full object-cover rounded-md'/>
                </div>
                <div className='w-full pb-3 h-10 flex justify-center items-center'>
                <h3 className='text-2xl font-niceFont'>{name}</h3>
                </div>
            </div>

        ))
    }
    
    </div>

</div>
  )
}

export default Hidrati;