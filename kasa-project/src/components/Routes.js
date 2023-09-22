import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../views/Home';
import mockData from '../mock'
import LocationInfo from '../views/LocationInfo';
import NotFound from '../views/NotFound';
import About from '../views/About';

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/KasaProject' element={<Home mockData={mockData} />} />
          <Route path='KasaProject/location/:id' element={<LocationInfo mockData={mockData} />} />
          <Route path='KasaProject/about' element={<About />} />
          <Route path='KasaProject/*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App