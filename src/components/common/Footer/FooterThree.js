import React from 'react';
import { Link } from 'react-router-dom';

const FooterThree = () => {
  return (
    <footer>
      <div className="tp-footer__area black-bg">
        <div className="tp-footer">
          {/* <!-- main-footer start  --> */}
          <div className="tp-footer__main">
            <div className="container">
              <div className="tp-footer-border pt-90 pb-70">
                <div className="pb-30 pb-70">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="footer-logo mb-30">
                        <Link to="/" href="#"><img src="/assets/img/white.svg" width={300} alt="" /></Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 text-end">
                      <div className="footer-form-2 mb-30">
                        <form>
                          <input type="email" placeholder="Enter your mail" />
                          <button type="submit">Subscribe <i
                            className="fal fa-paper-plane"></i></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 pb-30">
                      <h3 className="tp-footer__widget-title text-white">Quick Links</h3>
                      <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Contact Us</a></li>
                  
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 pb-30">
                      <h3 className="tp-footer__widget-title text-white">Our Service</h3>
                      <ul>
                        <li><a href="#">Mosquito Control</a></li>
                        <li><a href="#">Cockroach Control</a></li>
                        <li><a href="#">Ants Control</a></li>
                        <li><a href="#">Bedbugs Control</a></li>
                      </ul>
                    </div>
                  </div>
         
                  <div className="col-lg-4 col-md-6">
                    <div className="tp-footer__widget tp-footer__2  pb-30">
                      <h3 className="tp-footer__widget-title text-white">Quick Links</h3>
                      <ul>
                        <li><a href="#">27 Division St, Dubai UAE</a></li>
                        <li><a href="tel:+88015569569365">(+971)52462545632</a></li>
                        <li><a href="mailto:support@example.com">info@jeban.com</a></li>
                        <li><span> Office Hours: 9AM - 4PM</span></li>
                        <li><span> Friday - Wekend Day</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- main footer end  --> */}
        </div>
      </div>

      {/* <!-- footer copy right --> */}
      <div className="top-footer-copyright pt-30 pb-30 black-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-copyrigh-text text-center text-white">
                <span>© {new Date().getFullYear()} Jezban - Pest Control . All Rights Reserved..</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer copyright end  --> */}
    </footer>
  );
};

export default FooterThree;