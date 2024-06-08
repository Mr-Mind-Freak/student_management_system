import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { DataContext } from './DataContext';
import Layout from './Layout';
import Home from './components/Home';
import UserInput from './components/UserInput';

function App() {
  return (
    <div className="App container">
      <DataContext>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='input' element={<UserInput />} />
          </Route>
        </Routes>
      </DataContext>
    </div>
  );
}

export default App;
