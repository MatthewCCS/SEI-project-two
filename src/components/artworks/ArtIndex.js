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
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


const ArtIndex = () => {
  // states
  // Main art list
  const [artList, setArtList] = useState([])

  const [artists, setArtists] = useState([])

  const [filteredArt, setFilteredArt] = useState([])

  const [filters, setFilters] = useState({
    searchTerm: '',
    artist: '',
    placeoforigin: '',
    department: '',
  })

  // effects
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

  // handle change for search and filter
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setFilters({ ...filters, [e.target.name]: e.target.value })
    console.log('filters list ->', filters)
  }

  // useEffect to filter art & add to
  useEffect(() => {
    if (artList.length) {
      const regexSearch = new RegExp(filters.searchTerm, 'i')
      console.log(regexSearch)
      const filtered = artList.filter(art => {
        return regexSearch.test(art.artist_title) || regexSearch.test(art.title) || regexSearch.test(art.term_titles) || regexSearch.test(art.place_of_origin)
      })
      setFilteredArt(filtered)
      // console.log('filtered art ->', filteredArt)
    }
  }, [filters, artList])

  useEffect(() => {
    const artistList = []
    if (artList.length) {
      artList.forEach(art => artistList.includes(art.artist_title) ? '' : artistList.push(art.artist_title))
    }
    setArtists(artList)

    // console.log('artists ->', artists)
  }, [artList])

  return (
    <Container>
      <h1>Collection</h1>
      <Row>
        <Col md="3">
          {/* Filter dropdown and Searchbar */}
          <Form className="border p-3 shadow-sm">
            <Form.Group className="mb-3">
              <Form.Label>Search</Form.Label>
              <FormControl type="search" name="searchTerm" value={filters.searchTerm} placeholder="Search..." onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Artist</Form.Label>
              <Form.Select name="artist" value={filters.artist} aria-label="Default select example" onChange={handleChange}>
                <option>All</option>
                {/* {artists.map((artist) => <option value={artist.artist_title} key={artist.artist_title}>{artist.artist_title}</option>)} */}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Place of Origin</Form.Label>
              <Form.Select name="placeoforigin" aria-label="Default select example">
                <option>All</option>
                <option value="1">One</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Department</Form.Label>
              <Form.Select name="department" aria-label="Default select example">
                <option>All</option>
                <option value="1">One</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
        {/* The Art Index */}
        <Col md="9">
          <Row>
            {(filteredArt.length ? filteredArt : artList).map((art) => {
              const { id, title, artist_title, image_id } = art
              return (
                <Col key={id} md="6" lg="3" className="art mb-4 container-fluid">
                  <Link to={`/artworks/${id}`}>
                    <Card className="shadow-sm">
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