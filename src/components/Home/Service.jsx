import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Mobile from '../../assets/images/mobile.png'
import Arrow from '../../assets/images/arrow.png'
import B1 from '../../assets/images/b1.PNG'


const Service = () => {
    return(
        <section className="section section-service">
            <Container>
                <Row className="align-items-center">
                    <Col sm={3}>
                        <div className="heading-wrap">
                            <div className="heading-tag">Services</div>
                            <h2 className="heading">Explore <br/>Our Services</h2>
                            <div className="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</div>
                        </div>
                    </Col>
                    <Col sm={9}>
                        <Row>
                            {
                                [0,1,2,3,4,5].map((val) => {
                                    return <Col sm={4} key={val}>
                                        <div className="sbox">
                                            <img src={B1} alt="" className="overlay-img" />
                                            <div className="s-top">
                                                <figure>
                                                    <img src={Mobile} alt=""/>
                                                </figure>
                                                <h2 className="subheading">Computer Hardware</h2>
                                            </div>
                                            <div className="para">Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry.</div>
                                            <span><img src={Arrow} alt=""/></span>
                                            
                                        </div>
                                    </Col>
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default Service