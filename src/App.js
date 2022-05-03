import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


// Import components
import Home from './Home'
import ArtShow from './components/artworks/ArtShow'
import ArtIndex from './components/artworks/ArtIndex'
import PageNavbar from './components/PageNavbar'
import PageNotFound from './components/PageNotFound'


const App = () => {

  return (
    <>
      <BrowserRouter>
        <PageNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artworks" element={<ArtIndex />} />
          <Route path="/artworks/:id" element={<ArtShow />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

