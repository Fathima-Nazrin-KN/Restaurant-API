import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home  from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Moredetails from './components/Moredetails';

function App() {
  return (
   
    <Router>
      <Header/>
      <main>
      <Routes>
        <Route index element= {<Home/>} />
        <Route path='/restaurant/:id' element= {<Moredetails/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/contact' element= {<Contact/>} />
        
      </Routes>
      </main>
      <Footer/>
    </Router>
   
  
  );
}

export default App;
