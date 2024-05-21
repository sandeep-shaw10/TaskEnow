import Container from 'react-bootstrap/Container';
import ClientImg from '../../assets/images/client.PNG'


const Client = () => {
    return(
        <section class="section section-client">
            <Container>
                <figure>
                    <img src={ClientImg} alt="Our Partner" />
                </figure>
            </Container>
        </section>
    )
}


export default Client