import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Card, Container, Row } from 'react-bootstrap';

function MovieReviewFunction() {
    const [reviewList, getReview] = useState([])
    useEffect(() => {
        axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=BMJeocjgGAQwASt35AXUMPj1CV06L2Br")
            .then((review) => { getReview(review.results) })
            .catch((errr) => { console.log(errr); })
    }, [])
    return (
        <Container fluid
                className='main'>
                <div
                    className="reviewSection">
                       <Row>
                        {reviewList.map((item) => {
                            return (
                                <Col xs={12} sm={6}>
                                    <Card className='reviewCard'>
                                        <Card.Header className='reviewCardHeader'>{item.display_title}</Card.Header>
                                        <Card.Body className='reviewCardBody'>
                                            <p>Critics' Pick: {item.critics_pick}</p>
                                            <blockquote className="blockquote mb-0">
                                                <p>
                                                    {' '}{item.headline}{' '}
                                                </p>
                                                <footer className="blockquote-footer byline">
                                                    <cite title="Source Title">{item.byline}</cite>
                                                </footer>
                                            </blockquote>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                        </Row>
                </div>
            </Container>
    )
}

export default MovieReviewFunction



