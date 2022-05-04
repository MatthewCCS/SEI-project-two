import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="hero text-center">
      <div className="hero-container ">
        <h1 className="display-2">Art Institute Chigago</h1>
        <p className="lead">Chicago</p>
        <Link to="/artworks" className="btn btn-warning">Collection</Link>
      </div>
    </div>
  )

}

export default Home