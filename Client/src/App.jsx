import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contextprovider } from '../src/context/Contextprovider';
import Home from './page/Home';
import About from './page/About';

function App() {


  return (
    <div className=' h-auto max-w-[l00
    vw] box-border m-0 p-0 overflow-x-hidden'>
      <Contextprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/auth" element={<Auth/>} /> */}
          </Routes>
        </BrowserRouter>
      </Contextprovider>
    </div>
  )
}

export default App
