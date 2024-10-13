import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contextprovider } from '../src/context/Contextprovider';
import Home from './page/Home';
import About from './page/About';
import Profile from './page/Profile';
import Profiledet from './page/Profiledet';
import Freelancerprl from './page/Freelancerprl';

function App() {


  return (
    <div className=' h-auto max-w-lvw box-border m-0 p-0 overflow-hidden'>
      <Contextprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/auth" element={<Auth/>} /> */}
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/profiledet" element={<Profiledet/>}/>
            <Route path="/freelancerprl" element={<Freelancerprl/>}/>
          </Routes>
        </BrowserRouter>
      </Contextprovider>
    </div>
  )
}

export default App
