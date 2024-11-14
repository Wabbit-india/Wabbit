import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contextprovider } from '../src/context/Contextprovider';
import Home from './page/Home';
import About from './page/About';
import Profile from './page/Profile';
import Freelancerprl from './page/Freelancerprl';
import GetinfoPage from './components/getinfo/getinfoPage';

function App() {


  return (
    <div className=' h-auto  box-border m-0 p-0 overflow-x-hidden'>
      <Contextprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/getinfo" element={<GetinfoPage/>}/>
            <Route path="/myprofile" element={<Freelancerprl/>}/>
          </Routes>
        </BrowserRouter>
      </Contextprovider>
    </div>
  )
}

export default App
