import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/s1.png';
import img2 from '../../assets/images/s2.png';
import img3 from '../../assets/images/s3.png'


const Process = () => {
    return(
        <section className="section section-process">
            <Container>
                <div className="heading-wrap text-center">
                    <div className="heading-tag">Process</div>
                    <h2 className="heading">How It <span>works</span></h2>
                </div>
                <Row>
                    <Col sm={4}>
                        <div className="sbox">
                            <div className="sbox-upper">
                                <figure><img src={img1} alt="" /></figure>
                                <div className="number">01</div>
                            </div>
                            <div className="sbox-lower">
                                <h4 className="subheading">First Step</h4>
                                <div className="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</div>
                                <Link style={{ color: '#ed1b24' }} to='/learn-more' className="learn-more">Learn More</Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="sbox">
                            <div className="sbox-upper">
                                <figure><img src={img2} alt="" /></figure>
                                <div className="number">02</div>
                            </div>
                            <div className="sbox-lower">
                                <h4 className="subheading">First Step</h4>
                                <div className="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</div>
                                <Link style={{ color: '#ed1b24' }} to='/learn-more' className="learn-more">Learn More</Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="sbox">
                            <div className="sbox-upper">
                                <figure><img src={img3} alt="" /></figure>
                                <div className="number">03</div>
                            </div>
                            <div className="sbox-lower">
                                <h4 className="subheading">First Step</h4>
                                <div className="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</div>
                                <Link style={{ color: '#ed1b24' }} to='/learn-more' className="learn-more">Learn More</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Process