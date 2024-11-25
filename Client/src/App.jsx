import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contextprovider } from '../src/context/Contextprovider';
import Home from './page/Home';
import About from './page/About';
import GetinfoPage from './components/getinfo/getinfoPage';

function App() {


  return (
    <div className=' h-auto  box-border m-0 p-0 overflow-x-hidden'>
      <Contextprovider>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<h1 className='text-[50px] text-black text-center'>404 Not Found</h1>} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/getinfo" element={<GetinfoPage />} />

            {/* Browse professionals by category   */}
          </Routes>
        </BrowserRouter>
      </Contextprovider>
    </div>
  )
}

export default App
