import React from 'react'

// Import components
import ArtShow from './components/artworks/ArtShow'
import ArtIndex from './components/artworks/ArtIndex'
import PageNavbar from './components/PageNavbar'
import PageNotFound from './components/PageNotFound'


const App = () => {

  return (
    <>
      <h1>Home</h1>
      <ArtIndex />
      {/* <ArtShow />
      <PageNavbar />
      <PageNotFound /> */}
    </>
  )
}

export default App