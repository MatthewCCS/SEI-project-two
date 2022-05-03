import React from 'react'


import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import components
import PageNavbar from './components/PageNavebar'
import PageNotFound from './components/PageNotFound'


const App = () => {

  return (
    <>
      <BrowserRouter>
        <PageNavbar />
        <Routes>
    
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
