import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/images/b1.PNG'
import Image2 from '../../assets/images/b2.PNG'
import Image3 from '../../assets/images/b3.PNG'
import Image4 from '../../assets/images/b4.PNG'
import Arrow from '../../assets/images/arrow.png'


const Blog = () => {
    return(
        <section className="section section-blog">
            <Container>
                <div className="heading-wrap d-flex align-items-center justify-content-between">
                    <h2 className="heading">Latest Blog &amp; News</h2>
                    <Button as={Link} className="btn" to="/" variant="danger" >More Blogs</Button>
                </div>
                <Row>
                    <Col sm={6}>
                        <div className="bbox bbox-big">
                            <figure>
                                <img src={Image1} alt="" />
                            </figure>
                            <div className="bcontent">
                                <div className="bmeta">15th Jan, 2024</div>
                                <h3>Lorem Ipsum&nbsp;is simply dummy text</h3>
                                <span className="read-arrow">
                                    <img src={Arrow} alt="" />
                                </span>
                                <div className="para" style={{ marginRight: '2rem' }}>
                                    Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry Ipsum has been the industry standard dummy text ever since.
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <ul className="blog-list">
                            <li>
                                <div className="bbox bbox-small">
                                    <figure>
                                        <img src={Image2} alt="" />
                                    </figure>
                                    <div className="bcontent">
                                        <div className="bmeta">15th Jan, 2024</div>
                                        <h3>Lorem Ipsum&nbsp;is simply dummy text of the printing</h3>
                                        <Link className="read-more" to="/read-more" style={{ color: '#ed1b24' }}>Read More</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="bbox bbox-small">
                                    <figure>
                                        <img src={Image3} alt="" />
                                    </figure>
                                    <div className="bcontent">
                                        <div className="bmeta">15th Jan, 2024</div>
                                        <h3>Lorem Ipsum&nbsp;is simply dummy text of the printing</h3>
                                        <Link className="read-more" to="/read-more" style={{ color: '#ed1b24' }}>Read More</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="bbox bbox-small">
                                    <figure>
                                        <img src={Image4} alt="" />
                                    </figure>
                                    <div className="bcontent">
                                        <div className="bmeta">15th Jan, 2024</div>
                                        <h3>Lorem Ipsum&nbsp;is simply dummy text of the printing</h3>
                                        <Link className="read-more" to="/read-more" style={{ color: '#ed1b24' }}>Read More</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="bbox bbox-small">
                                    <figure>
                                        <img src={Image4} alt="" />
                                    </figure>
                                    <div className="bcontent">
                                        <div className="bmeta">15th Jan, 2024</div>
                                        <h3>Lorem Ipsum&nbsp;is simply dummy text of the printing</h3>
                                        <Link className="read-more" to="/read-more" style={{ color: '#ed1b24' }}>Read More</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Blog