import React from 'react'
import Piletina from '../assets/piletina.jpg'
import BijeloMeso from '../assets/bijelomeso.jpg'
import Riba from '../assets/ribaa.jpg'
import Jaja from '../assets/jaja.jpg'
import Orassasti from '../assets/orasastiPlodovi.jpg'
import Stejk from '../assets/stejk.jpg'

const Proteini = () => {

    const data = [
        {
            id:1,
            name:'Bijelo meso',
            src: BijeloMeso
        },
        {
            id:2,
            name:'Riba',
            src: Riba
        },
        {
            id:3,
            name:'Jaja',
            src: Jaja
        },
        {
            id:4,
            name:'Orasasti plodovi',
            src: Orassasti
        },
        {
            id:5,
            name:'Stejk',
            src: Stejk
        },
    ]

  return (
    <div name='Proteini' className='w-full h-auto'>
    <div className='w-full h-auto md:h-96 items-center justify-center flex'>
    <h1 className='absolute shadowblack text-white font-extrabold font-niceFont md:text-9xl text-7xl text-amber-300 z-20 drop-shadow-lg'>PROTEINI</h1>
    <img src={Piletina} alt='Slika piletine' className='w-full blur-sm h-auto md:h-96 object-cover border-t-2 border-b-2  border-black'/>
    </div>
        <div className='w-full h-auto justify-center items-center flex flex-col'>
            <h1 className='h-20 pt-11 text-7xl font-niceFont font-extrabold'>INFO</h1>
            <p className='px-10 py-10 font-oneFont md: text-2xl'> Proteini su ključni nutrijenti u svijetu fitnesa jer igraju važnu ulogu u izgradnji i obnovi mišićnog tkiva, podržavaju imunološki sistem te igraju ulogu u mnogim metaboličkim procesima u tijelu. Evo nekoliko zanimljivosti o proteinima u fitnes svijetu i kako se dobijaju iz hrane: <br />
            <br /> <br />1. Aminokiseline su osnovne komponente proteina: Proteini su sačinjeni od aminokiselina koje su temeljni gradivni blokovi. Postoje esencijalne aminokiseline koje tijelo ne može samo proizvesti i treba ih unositi hranom.
            <br />Izgradnja mišića: Proteini su ključni za izgradnju mišićne mase. Tijekom vježbanja, mišićna vlakna se lome i oštećuju. Unos dovoljno proteina pomaže u procesu oporavka i rješavanju oštećenja, čime se pomaže u izgradnji mišića.
            <br />2. Proteinska sinteza: Unos proteina potiče proteinsku sintezu, proces kojim se aminokiseline spajaju kako bi se stvorili novi proteini u tijelu
            <br />3.Različiti izvori proteina: Proteine možete dobiti iz različitih izvora hrane. Najbogatiji izvori proteina su meso (piletina, puretina, govedina), riba, jaja, mliječni proizvodi (sir, jogurt), mahunarke (grašak, leća, crni grah), orašasti plodovi i sjemenke.
            <br />4.Biološka vrijednost proteina: Različiti izvori proteina imaju različitu biološku vrijednost, odnosno koliko dobro se aminokiseline apsorbiraju i koriste za izgradnju tkiva. Proteini životinjskog podrijetla obično imaju veću biološku vrijednost u usporedbi s biljnim izvorima.
            <br />5.Raznolikost aminokiselina: Raznolik unos proteina osigurava raznolikost aminokiselina koje tijelo treba za optimalno funkcioniranje. Različiti izvori proteina doprinose različitim aminokiselinama.
            <br />6.Koncept "anaboličkog prozora": Postoji koncept "anaboličkog prozora" koji sugerira da je važno unijeti proteine ​​odmah nakon treninga kako bi se potakla brza proteinska sinteza i oporavak mišića. Međutim, precizno vrijeme unosa proteina nakon treninga može biti manje bitno od ukupnog dnevnog unosa proteina
            <br />7.Personalizacija unosa proteina: Optimalan unos proteina varira ovisno o ciljevima (izgradnja mišića, mršavljenje, održavanje), tjelesnoj težini, razini aktivnosti i drugim čimbenicima. Postoji općenita preporuka da proteini čine oko 10-35% dnevnih kalorija.
            <br />8.Protein u prahu i dodaci prehrani: U svijetu fitnesa često se koriste i dodaci proteina u prahu kao praktičan način za brz unos proteina nakon treninga ili kao dopuna obrocima.
            <br />9.Važnost ravnoteže s ostalim nutrijentima: Iako su proteini ključni, važno je osigurati ravnotežu s ostalim nutrijentima kao što su ugljikohidrati i masti te unositi raznoliku i uravnoteženu prehranu za optimalno zdravlje i performanse.
            U konačnici, proteini su neophodni za tjelesnu izgradnju i funkciju, posebno u svijetu fitnesa. Važno je razumjeti kako pravilno unositi proteine iz različitih izvora hrane kako bi se postigli optimalni rezultati.</p>
        </div>

    <div className='flex pt-7 pb-7 flex-col md:flex-row w-full md:h-60 bg-lighterGreen justify-around items-center'>
    {
        data.map(({id,name,src})=>(
            <div key={id} className='flex flex-col w-60 text-white items-center py-5 justify-center shadow-lg rounded-md hover:scale-110 duration-150'>
                <div className='w-60 h-40 flex items-center justify-center'>
                <img  src={src} alt='Hrana' className='w-full h-full rounded-md object-cover'/>
                </div>
                <div className='w-full h-auto flex justify-center items-center'>
                <h3 className='text-xl text-center font-niceFont'>{name}</h3>
                </div>
            </div>

        ))
    }
    
    </div>

</div>
  )
}

export default Proteini