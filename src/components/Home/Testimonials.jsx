import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Stars from '../../assets/images/stars.png'
import Image1 from '../../assets/images/r1.png'
import Image2 from '../../assets/images/r2.png'
import Image3 from '../../assets/images/r3.png'


const Testimonials = () => {
    return (
        <section className="section section-testimonials">
            <Container>
                <div className="heading-wrap text-center">
                    <div className="heading-tag">Testimonials</div>
                    <h2 className="heading">What People Thinks <span>About Us </span></h2>
                </div>
                <div className="review-slider owl-carousel owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                        <div className="owl-stage" style={{transform: `translate3d(-1149px, 0px, 0px)`, transition: `all 3s ease 0s`, width: `3834px`}}>
                        <div className="owl-item cloned" style={{ width: "353.333px", marginRight: "30px"}}>
                            <div className="item">
                                <div className="rbox">
                                    <figure>
                                    <img src={Image2} alt="" />
                                    </figure>
                                    <div className="rbox-content">
                                    <div className="para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                    <div className="rbottom">
                                        <h3 className="subheading">Amy Mowle</h3>
                                        <img src={Stars} />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item cloned" style={{ width: "353.333px", marginRight: "30px"}}>
                            <div className="item">
                                <div className="rbox">
                                    <figure>
                                    <img src={Image3} alt="" />
                                    </figure>
                                    <div className="rbox-content">
                                    <div className="para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                    <div className="rbottom">
                                        <h3 className="subheading">Amy Mowle</h3>
                                        <img src={Stars} />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item cloned" style={{ width: "353.333px", marginRight: "30px"}}>
                            <div className="item">
                                <div className="rbox">
                                    <figure>
                                    <img src={Image2} alt="" />
                                    </figure>
                                    <div className="rbox-content">
                                    <div className="para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                    <div className="rbottom">
                                        <h3 className="subheading">Amy Mowle</h3>
                                        <img src={Stars} />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: "353.333px", marginRight: "30px"}}>
                            <div className="item">
                                <div className="rbox">
                                    <figure>
                                    <img src={Image1} alt="" />
                                    </figure>
                                    <div className="rbox-content">
                                    <div className="para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                    <div className="rbottom">
                                        <h3 className="subheading">Amy Mowle</h3>
                                        <img src={Stars} />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: "353.333px", marginRight: "30px"}}>
                            <div className="item">
                                <div className="rbox">
                                    <figure>
                                    <img src={Image2} alt="" />
                                    </figure>
                                    <div className="rbox-content">
                                    <div className="para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                    <div className="rbottom">
                                        <h3 className="subheading">Amy Mowle</h3>
                                        <img src={Stars} />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: "353.333px", marginRight: "30px"}}>
                            <div className="item">
                                <div className="rbox">
                                    <figure>
                                    <img src={Image3} alt="" />
                                    </figure>
                                    <div className="rbox-content">
                                    <div className="para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                    <div className="rbottom">
                                        <h3 className="subheading">Amy Mowle</h3>
                                        <img src={Stars} />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item" style={{ width: "353.333px", marginRight: "30px"}}>
                            <div className="item">
                                <div className="rbox">
                                    <figure>
                                    <img src={Image2} alt="" />
                                    </figure>
                                    <div className="rbox-content">
                                    <div className="para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                    <div className="rbottom">
                                        <h3 className="subheading">Amy Mowle</h3>
                                        <img src={Stars} />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item cloned" style={{ width: "353.333px", marginRight: "30px"}}>
                            <div className="item">
                                <div className="rbox">
                                    <figure>
                                    <img src={Image1} alt="" />
                                    </figure>
                                    <div className="rbox-content">
                                    <div className="para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                    <div className="rbottom">
                                        <h3 className="subheading">Amy Mowle</h3>
                                        <img src={Stars} />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item cloned" style={{ width: "353.333px", marginRight: "30px"}}>
                            <div className="item">
                                <div className="rbox">
                                    <figure>
                                    <img src={Image2} alt="" />
                                    </figure>
                                    <div className="rbox-content">
                                    <div className="para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                    <div className="rbottom">
                                        <h3 className="subheading">Amy Mowle</h3>
                                        <img src={Stars} />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item cloned" style={{ width: "353.333px", marginRight: "30px"}}>
                            <div className="item">
                                <div className="rbox">
                                    <figure>
                                    <img src={Image3} alt="" />
                                    </figure>
                                    <div className="rbox-content">
                                    <div className="para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                    <div className="rbottom">
                                        <h3 className="subheading">Amy Mowle</h3>
                                        <img src={Stars} />
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="owl-nav disabled">
                        <div className="owl-prev"><i className="fa fa-angle-left"></i></div>
                        <div className="owl-next"><i className="fa fa-angle-right"></i></div>
                    </div>
                    <div className="owl-dots"><button role="button" className="owl-dot active"><span></span></button><button role="button" className="owl-dot"><span></span></button></div>
                </div>
            </Container>
        </section>
    )
}


export default Testimonials