
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import Heading from './Heading';
import Registration from './components/Registration';

function App() {
  return (
    <div className='App'>
      <Heading />
      <div className='Body'>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Registration' element={<Registration />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

