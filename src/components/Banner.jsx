import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <section className="section section-banner">
                <div className="container ">
                    <div className="row ">
                        <div className="col-sm-6">
                            <div className="content-wrap">
                                <h2 className="heading"> Thorough inspection<br/>to identify & resolve<br/>issues</h2>
                                <div className="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</div>
                                <div className="btn-wrap">
                                    <Link className="btn" to='/'>Get Started Now</Link>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className="col-sm-6"></div>
                    </div>
                </div>
            </section>
  );
};

export default Banner;