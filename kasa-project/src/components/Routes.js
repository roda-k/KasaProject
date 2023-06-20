import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../views/Home';
import mockData from '../mock'
import LocationInfo from '../views/LocationInfo';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home mockData={mockData}/>} />
        <Route path='location/:id' element={<LocationInfo mockData={mockData}/>} />
        {/* <Route path='about' element={<About />} /> */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App