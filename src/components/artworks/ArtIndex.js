import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// import bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const ArtIndex = () => {
  // breadlist state
  const [ artList, setArtList] = useState([])

  useEffect(() => {
    const getArtList = async () => {
      try {
        const { data } = await axios.get('https://api.artic.edu/api/v1/artworks')
        setArtList(data)
      } catch (error) {
        console.log(error)
      }

    }
    getArtList()
  }, [])
  return (
    <h1>Art Index / The Collection</h1>
  )
}

export default ArtIndex