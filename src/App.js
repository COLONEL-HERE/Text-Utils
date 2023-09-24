import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <>
    <Router>
    <Navbar />

      <Routes>

        <Route exact path='/about' element={<About />}>         
        </Route>
        
        <Route exact path='/' element={<><div className='text-4xl mx-72 mt-7 font-bold' >Enter Your Text Below :</div><Textform /> </> }> 
        
        </Route>

      </Routes>
      
    </Router>
    </>
  );
}