import React, { Component } from 'react';

class contact extends Component {
    render() {
        return (
            <section id="contact">
            <div className="selection-title">
              <h2 className="text-success"><u>Contact</u></h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <h3><strong>Address</strong></h3>
                  <div id="bt1">
                    <i className="fas fa-location-arrow" />
                    <svg class="bi bi-geo-alt" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                  </div>
                  <div id="tt">
                    <h6><strong> Địa chỉ hiện tại:</strong></h6>
                    <p> Khu B KTX ĐHQG HCM , Linh Trung ,Thủ Đức</p>
                  </div>
                  <div id="bt2">
                    <i className="fas fa-envelope" /><svg class="bi bi-envelope-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                                                    <path fill-rule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                                                                                                  </svg>
                  </div>
                  <div id="tt2">
                    <h4><strong>  Email:</strong></h4>
                    <p>duongdo.220820@gmail.com</p>
                  </div>
                  <div id="bt3">
                    <i className="fas fa-phone" /><svg class="bi bi-phone" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                  <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                                  <path fill-rule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                                </svg>
                  </div>
                  <div id="tt3">
                    <h4><strong> Điện Thoại:</strong></h4>
                    <p>036.406.5209</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <h3><strong>Send Message</strong></h3>
                  <label htmlFor="usr">Name:</label>
                  <div className="form-group"><input type="text" className="form-control" id="usr" placeholder="Enter your name" /></div>
                  <label htmlFor="usr">Email</label>
                  <div className="form-group"><input type="email" className="form-control" id="usr" placeholder="Enter your email" /></div>
                  <div className="form-group">
                    <label htmlFor="comment">Message:</label>
                    <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
                  </div>
                  <div className="btn btn-primary">
                    Send Message
                  </div>
                </div>
                <div className="col-lg-4">
                  <h3><strong>Social Links</strong></h3>
                  <div className="container">
                    <div className="row">
                      <a href="http://www.facebook.com/dtd228"><i className="fab fa-facebook" aria-hidden="true" /><img src="image/facebook2.png"/> <strong>  Facebook</strong></a>
                    </div>
                    <div className="row">
                      <a href="http://"><i className="fa fa-twitter" aria-hidden="true" /> <img src="image/twitter.png"/><strong>  Twitter</strong></a>
                    </div>
                    <div className="row">
                      <a href="http://" ><i className="fa fa-instagram" aria-hidden="true"/><img src="image/instagram.png"/><strong>  Instagram</strong></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default contact;