import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Contextprovider } from '../src/context/Contextprovider';
import Home from './page/Home';

function App() {


  return (
    <div className=' h-auto w-lvw box-border m-0 p-0 pt-[80px]'>
      <Contextprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Contextprovider>
    </div>
  )
}

export default App
