import './index.css'
import Hello from "./componentss/Hello";
import Navbar from "./componentss/Navbar";
import Food from './componentss/Food';
import Proteini from './componentss/Proteini'
import Masti from './componentss/Masti'
import Hidrati from "./componentss/Hidrati";
import Contact from './componentss/Contact';
import Footer from './componentss/Footer';
import Sokovi from './componentss/Sokovi';


function App() {
  return (
    <div className='overflow-hidden'>
        <Navbar />
        <Hello />
        <Food />
        <Proteini />
        <Masti />
        <Hidrati />
        <Sokovi />
        <Contact/>
        <Footer />
    </div>
  );
}

export default App;
