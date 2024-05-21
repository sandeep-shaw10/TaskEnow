import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/images/w1.png'
import Image2 from '../../assets/images/w2.png'
import Image3 from '../../assets/images/w3.png'


const WhyUs = () => {
    return(
        <section className="section section-why-us">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col sm={5}>
                        <div className="heading-wrap">
                            <div className="heading-tag">Choose better</div>
                            <h2 className="heading">Why Choose Our <br/>Services</h2>
                            <div className="para">Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                        </div>
                    </Col>
                    <Col sm={7}>
                        <Row className="d-flex align-items-center">
                            <Col sm={6}>
                                <div className="sbox">
                                    <figure>
                                        <img src={Image1} alt="" />
                                    </figure>
                                    <h3 className="subheading">Fast and Affordable</h3>
                                    <div className="para">
                                        From same-day services to free 2-minute online quotes, speed and convenience are at our core. We provide this value at better rates than others in the industry.
                                    </div>
                                </div>
                                <div className="sbox sbox-last">
                                    <figure>
                                        <img src={Image2} alt="" />
                                    </figure>
                                    <h3 className="subheading">Fast and Affordable</h3>
                                    <div className="para">
                                        From same-day services to free 2-minute online quotes, speed and convenience are at our core. We provide this value at better rates than others in the industry.
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="sbox">
                                    <figure>
                                        <img src={Image3} alt="" />
                                    </figure>
                                    <h3 className="subheading">Fast and Affordable</h3>
                                    <div className="para">
                                        From same-day services to free 2-minute online quotes, speed and convenience are at our core. We provide this value at better rates than others in the industry.
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default WhyUs