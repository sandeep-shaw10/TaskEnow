import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import f from '../../assets/images/f.png'
import i from '../../assets/images/i.png'
import x from '../../assets/images/x.png'
import Image1 from '../../assets/images/t1.png'
import Image2 from '../../assets/images/t2.png'
import Image3 from '../../assets/images/t3.png'


const Team = () => {

    const Profile = [
        {
            name: 'Amelii Roger 1',
            status: 'Sr. Technician 1',
            facebookLink: 'https://github.com/sandeep-shaw10/taskenow',
            instaLink: 'https://github.com/sandeep-shaw10/taskenow',
            Twitter: 'https://github.com/sandeep-shaw10/taskenow',
            image: Image1
        },
        {
            name: 'Amelii Roger 2',
            status: 'Sr. Technician 2',
            facebookLink: 'https://github.com/sandeep-shaw10/taskenow',
            instaLink: 'https://github.com/sandeep-shaw10/taskenow',
            Twitter: 'https://github.com/sandeep-shaw10/taskenow',
            image: Image2
        },
        {
            name: 'Amelii Roger 3',
            status: 'Sr. Technician 3',
            facebookLink: 'https://github.com/sandeep-shaw10/taskenow',
            instaLink: 'https://github.com/sandeep-shaw10/taskenow',
            Twitter: 'https://github.com/sandeep-shaw10/taskenow',
            image: Image3
        }
    ]

    return(
        <section className="section section-team">
            <Container>
                <div className="heading-wrap text-center">
                    <div className="heading-tag">Team</div>
                    <h2 className="heading">Meet With Our Expert <br/><span>Technicians</span></h2>
                </div>
                <Row>
                    {
                        Profile.map(({name, status, facebookLink, instaLink, Twitter, image}, index) => {
                            return <Col sm={4} key={index}>
                                <div className="tbox">
                                    <figure>
                                        <img src={image} alt={status}/>
                                    </figure>
                                    <div className="tbox-content text-center">
                                        <h3 className="subheading">{name}</h3>
                                        <div className="t-tag">{status}</div>
                                        <ul className="t-social">
                                            <li><Link to={facebookLink} target="_blank" rel="noopener noreferrer"><img src={f} alt=""/></Link></li>
                                            <li><Link to={instaLink} target="_blank" rel="noopener noreferrer"><img src={i} alt=""/></Link></li>
                                            <li><Link to={Twitter} target="_blank" rel="noopener noreferrer"><img src={x} alt=""/></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}


export default Team