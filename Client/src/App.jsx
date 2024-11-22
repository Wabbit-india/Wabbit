import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contextprovider } from '../src/context/Contextprovider';
import Home from './page/Home';
import About from './page/About';
import Profile from './page/Profile';
import Photocard from './page/Photocard'
import Profiledet from './page/Profiledet';
import Freelancerprl from "./components/Freelancerprl"

function App() {


  return (
    <div className=' h-auto  box-border m-0 p-0 overflow-x-hidden'>
      <Contextprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/profile" element={<Profile/>}/>
<<<<<<< HEAD
            <Route path='/editor' element={<Photocard/>}/>
            <Route path='/myprofile' element={<Freelancerprl/>}/>
=======
            <Route path="/getinfo" element={<GetinfoPage/>}/>
            

>>>>>>> 910f6fae61b39fda73ff02ce733b7533b3d45a0b
          </Routes>
        </BrowserRouter>
      </Contextprovider>
    </div>
  )
}

export default App
