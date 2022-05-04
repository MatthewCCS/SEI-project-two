import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

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
              <Image rounded="false" fluid="true" className="mb-5" src={`https://www.artic.edu/iiif/2/${singleArt.image_id}/full/843,/0/default.jpg`} alt={singleArt.name} />
            </Col>
            <Col md="6" className="shadow-sm p-3 border">
              {/* Artist Name */}
              <span className="title-span">Artist</span> <span className="desc">{singleArt.artist_title}</span>
              <hr />
              {/* Artist Info */}
              <div className="bio-boxes">
                <span className="title-span">Bio</span><br /> <p className="desc-bio">{singleArt.artist_display}</p>
              </div>
              <hr />
              {/* Art Piece Info */}
              
              <span className="title-span">Medium</span> <span className="desc">{singleArt.medium_display}</span>
              
              <hr />
              {/* Date Completed */}
              <span className="title-span">Completed</span> <span className="desc">{singleArt.date_display}</span>
              <hr />
              {/* Country of Origin */}
              <span className="title-span">Country of Origin</span> <span className="desc">{singleArt.place_of_origin}</span>
              <hr />
              {/* Category */}
              <span className="title-span">Category</span> <span className="desc">{singleArt.department_title}</span>
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