import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='location' element={< LocationInfo />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes> */}
      <Footer />
    </div>
  )
}

export default App