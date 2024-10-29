import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contextprovider } from '../src/context/Contextprovider';
import Home from './page/Home';
import About from './page/About';
import Profile from './page/Profile';
// import Profiledet from './page/Profiledet';
import Freelancerprl from './page/Freelancerprl';
import RegisterStep1 from './components/Auth/Register Steps/RegisterStep1';
import RegisterStep2 from './components/Auth/Register Steps/RegisterStep2';
import Freelancer1 from './components/freelancer/Freelancer1';
import Freelancer2 from './components/freelancer/Freelancer2';
import Freelancer3 from './components/freelancer/Freelancer3';
import Profile1 from './components/Profile/Profile1';

function App() {


  return (
    <div className=' h-auto  box-border m-0 p-0 overflow-x-hidden'>
      <Contextprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/myprofile" element={<Freelancerprl />} />
          </Routes>
        </BrowserRouter>
      </Contextprovider>
    </div>
  )
}

export default App
