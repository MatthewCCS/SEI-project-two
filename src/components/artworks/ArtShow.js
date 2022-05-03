import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'

import Loading from '../../utilities/Loading'

import { Link } from 'react-router-dom'


const ArtShow = () => {

  const { id } = useParams()
  const [singleArt, setSingleArt] = useState('')
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getSingleArt = async () => {
      try {
        const { data } = await axios.get(`https://api.artic.edu/api/v1/artworks/${id}`)
        setSingleArt(data.data)
        console.log(data)
      } catch (error) {
        setErrors(true)
      }
    }
    getSingleArt()
  }, [id])


  return (
  
    <Container className="mt-4">
      <Row>
        {singleArt ?
          <>
            <Col>
              <h2>{singleArt.title}</h2>
            </Col>
            <hr />
            <Col md="6">
              <Image rounded="true" fluid="true" src={`https://www.artic.edu/iiif/2/${singleArt.image_id}/full/843,/0/default.jpg`} alt={singleArt.name} />
            </Col>
            <Col md="6">
              {/* Artist Name */}
              <p><strong>Artist</strong> <span>{singleArt.artist_title}</span></p>
              <hr />
              {/* Artist Info */}
              <p><strong>Bio</strong><br /> <span>{singleArt.artist_display}</span></p>
              <hr />
              {/* Art Piece Info */}
              <p><strong>Medium</strong> <span>{singleArt.medium_display}</span></p>
              <hr />
              {/* Date Completed */}
              <p><strong>Completed</strong> <span>{singleArt.date_display}</span></p>
              <hr />
              {/* Country of Origin */}
              <p><strong>Country of Origin</strong> <span>{singleArt.place_of_origin}</span></p>
              <hr />
              {/* Category */}
              <p><strong>Category</strong> <span>{singleArt.department_title}</span></p>
              <hr />
              <Link to="/artworks" className="btn btn-secondary">Back to Collection</Link>
            </Col>
          </>
          :
          <h2 className="text-center">
            {errors ? 'Something went wrong! Please try again later!' : <Loading />}
          </h2>
        }
      </Row>
    </Container>
  )
}

export default ArtShow