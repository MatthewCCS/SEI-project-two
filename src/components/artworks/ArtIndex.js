/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// import bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'


const ArtIndex = () => {
  // breadlist state
  const [artList, setArtList] = useState([])

  useEffect(() => {
    const getArtList = async () => {
      try {
        const { data } = await axios.get('https://api.artic.edu/api/v1/artworks?page=1&limit=100')
        setArtList(data.data)
        console.log(data.data)
      } catch (error) {
        console.log(error)
      }

    }
    getArtList()
  }, [])

  return (
    <Container>
      <h1>Collection</h1>
      <Row>
        <Col md="2">

          <Nav defaultActiveKey="/home" className="flex-column bg-secondary">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav>

        </Col>
        <Col md="10">
          <Row>
            {artList.map((art) => {
              const { id, title, artist_title, image_id } = art
              return (
                <Col key={id} md="6" lg="3" className="art mb-4 container-fluid">
                  <Link to={`/artworks/${id}`}>
                    <Card>
                      <Card.Img src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} />
                      <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <hr />
                        <Card.Text>{artist_title}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>


    </Container>
  )
}

export default ArtIndex