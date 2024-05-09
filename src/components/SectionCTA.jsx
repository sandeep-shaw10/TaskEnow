const SectionCTA = () => {
  return (
    <section className="section section-cta">
                <div className="container">
                    <form className="form">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-wrap">
                                    <input type="text" placeholder="Name" className="form-control" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-wrap">
                                    <input type="text" placeholder="Phone No." className="form-control" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-wrap">
                                    <input type="email" placeholder="Email" className="form-control" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-wrap form-wrap-submit">
                                    <input type="submit" value="submit" className="btn" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
  );
};

export default SectionCTA;