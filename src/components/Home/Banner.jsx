import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Banner = () => {
  return (
    <section className="section section-banner">
        <Container>
            <Row>
                <Col sm={6}>
                    <div className="content-wrap">
                        <h1 className='text-white'> Thorough inspection<br/>to identify & resolve<br/>issues</h1>
                        <div className='py-4 text-white'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore.
                        </div>
                        <div>
                            <Button className='btn-danger' as={Link} to='/book-now' size="lg">
                                Get Started Now
                            </Button>
                        </div>
                        <div></div>
                    </div>
                </Col>
                <Col sm={6}></Col>
            </Row>
        </Container>
    </section>
  );
};


export default Banner;