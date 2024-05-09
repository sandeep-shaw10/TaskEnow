const SectionCTA = () => {
    return (
      <section class="section section-cta">
                  <div class="container">
                      <form class="form">
                          <div class="row">
                              <div class="col-sm-3">
                                  <div class="form-wrap">
                                      <input type="text" placeholder="Name" class="form-control" />
                                  </div>
                              </div>
                              <div class="col-sm-3">
                                  <div class="form-wrap">
                                      <input type="text" placeholder="Phone No." class="form-control" />
                                  </div>
                              </div>
                              <div class="col-sm-3">
                                  <div class="form-wrap">
                                      <input type="email" placeholder="Email" class="form-control" />
                                  </div>
                              </div>
                              <div class="col-sm-3">
                                  <div class="form-wrap form-wrap-submit">
                                      <input type="submit" value="submit" class="btn" />
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </section>
    );
  };
  
  export default SectionCTA;