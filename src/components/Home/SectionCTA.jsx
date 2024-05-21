import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const SectionCTA = () => {

    const formBg = {
        padding: `35px`,
        boxShadow:`0 5px 10px 0px #ddd`,
        borderRadius: `15px`,
        background: `#fff`,
    }

    const [name, setName] = useState(``)
    const [email, setEmail] = useState(``)
    const [phone, setPhone] = useState(``)

    const handleSubmit = () => {
        const phonenoVerify = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        const emailVerify = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(name.length < 1){
            alert('Enter name')
            return
        }
        if(!email.match(emailVerify)){
            alert('Enter ValidEmail')
            return
        }
        if(!phone.match(phonenoVerify)){
            alert('Enter Valid Phone')
            return
        }
        alert(`Name: ${name}\n ${email} and ${phone}\n This is DEMO display for checking SUBMIT Value`)
    }

    return (
        <section className="section section-cta">
            <Container style={formBg} >
                <Form>
                    <Row>
                        <Form.Group style={{ paddingTop: `10px`, paddingBottom: `10px` }} as={Col} md="3" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group style={{ paddingTop: `10px`, paddingBottom: `10px` }} as={Col} md="3" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Phone No."
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group style={{ paddingTop: `10px`, paddingBottom: `10px` }} as={Col} md="3" controlId="validationCustom01">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group style={{ paddingTop: `10px`, paddingBottom: `10px` }} as={Col} md="3" controlId="validationCustom01">
                            <div className="d-grid">
                                <Button onClick={handleSubmit} className='btn-danger'>Submit</Button>
                            </div>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </section>
  );
};

export default SectionCTA;