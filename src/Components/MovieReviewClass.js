import React, { Component } from 'react'
import { Col, Card, Container, Row } from 'react-bootstrap';


export class MovieReviewClass extends Component {
    constructor() {
        super();
        this.state = { reviews: [] }
    }
    componentDidMount() {
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=BMJeocjgGAQwASt35AXUMPj1CV06L2Br")
            .then(review => review.json())
            .then(data => this.setState({ reviews: data.results }))
    }
    render() {
        return (
            <Container fluid
                className='main'>
                <div
                    className="reviewSection">
                       <Row>
                        {this.state.reviews.map((item) => {
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
}

export default MovieReviewClass
