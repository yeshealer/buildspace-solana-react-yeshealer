import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './assets/GlobalStyle'
import Header from './views/Header';
import Animation from './views/Animation'
import Home from './views/Home';
import './assets/global.basic.scss'
import './assets/global.common.scss'

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Animation />
      <Suspense fallback>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
