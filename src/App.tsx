import TestPage from './pages/test/test';
import Layout from './pages/layout/layout';
import HomePage from './pages/home/home';
import Auth from './pages/auth/auth';
import ErrorPage from './pages/error/error';
import ModuleReg from './moduls/module_reg';
import ModuleSingIn from './moduls/module_singin';
import { Routes, Route } from 'react-router-dom';
import React from "react"
import "./App.css"
function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='home' element={<HomePage />} />
          <Route path='test' element={<TestPage />} />
          <Route path='auth/' element={<Auth />}>
            <Route path='sing-in' element={<ModuleSingIn/>} />
            <Route path='sing-up' element={<ModuleReg/>} />
          </Route>
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>

  );
}

export default App;
