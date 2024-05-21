import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import SectionImg from '../../assets/images/abt-img.PNG'


const AboutUs = () => {
    return(
        <section className="section section-about">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col sm={7}>
                            <figure>
                                <img src={SectionImg} />
                            </figure>
                        </Col>
                        <Col sm={5}>
                            <div className="content-wrap">
                                <div className="heading-tag">About Us</div>
                                <h2 className="heading">Lorem ipsum dolor sit <span>amet consectetur</span></h2>
                                <div className="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</div>
                                <div className="btn-wrap">
                                    <Button as={Link} to="/" variant='danger'>
                                        Read more
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    )
}


export default AboutUs