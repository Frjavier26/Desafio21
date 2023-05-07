import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'

import Home from "./views/Home"
import Contacto from "./views/Contacto"

function App() {
  
  return (
    <div className='container-fluid p-0'>
      <BrowserRouter>
      <Navbar />
      <div className="container">
      <Routes>
      <Route path='/' element= {< Home />} />
      <Route path= '/contacto' element = {<Contacto />}/>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
