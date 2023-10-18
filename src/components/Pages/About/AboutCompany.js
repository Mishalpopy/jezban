import React from "react";

const AboutCompany = () => {
  return (
    <>
      <div className="about-details-page pt-140 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-details-info pr-65">
                <div className="tp-section-wrapper">
                  <span className="tp-section-subtitle mb-25">
                    About our Company
                  </span>
                  <h2 className="tp-pt-size mb-40">
                    Our business boasts top of the line services
                  </h2>
                </div>
                <div className="about-tb-content">
                  <nav>
                    <div className="nav mb-30" id="nav-tab" role="tablist">
                      <button
                        className="nav-links active"
                        id="mission"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-mission"
                        type="button"
                        role="tab"
                        aria-controls="nav-mission"
                        aria-selected="true"
                      >
                        Our Mission
                      </button>

                      <button
                        className="nav-links"
                        id="nav-vission-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-vission"
                        type="button"
                        role="tab"
                        aria-controls="nav-vission"
                        aria-selected="false"
                      >
                        Our Vission
                      </button>
                      <button
                        className="nav-links"
                        id="nav-value-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-value"
                        type="button"
                        role="tab"
                        aria-controls="nav-value"
                        aria-selected="false"
                      >
                        Our Value
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-mission"
                      role="tabpanel"
                      aria-labelledby="nav-mission"
                    >
                      <p>
                      At Jezban Pest Control, our mission is to protect your homes and businesses from pest intrusions. We are dedicated to creating pest-free, safe, and comfortable environments for you, your family, and your employees. With our expertise and commitment, we provide efficient and effective pest control services that ensure your peace of mind.
                      </p>

                     
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-vission"
                      role="tabpanel"
                      aria-labelledby="nav-vission-tab"
                    >
                      <p>
                      At Jezban Pest Control, our vision is to lead the pest control industry, setting the highest standards in pest management. We aim to consistently exceed our customers' expectations, creating pest-free and healthy environments for all our clients. Our vision is to be your trusted partner in safeguarding your spaces from unwanted intruders, offering services that are efficient, effective, and unmatched in quality.
                      </p>
                     

                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-value"
                      role="tabpanel"
                      aria-labelledby="nav-value-tab"
                    >
                    <p>
                       <h5>Expertise:</h5>We believe in staying ahead in the world of pest control, using the latest techniques and knowledge to offer you the highest quality service available.
                      </p>
                      <p>
                       <h5>Environmental Responsibility:</h5>Our commitment to eco-friendly and sustainable pest control methods reflects our care for the environment and your well-being.
                      </p>
                      <p>
                       <h5>Customer Satisfaction:</h5>Your satisfaction is our ultimate goal. We work tirelessly to exceed your expectations and ensure your peace of mind.
                      </p>
                      <p>
                       <h5>Local Commitment:</h5>As a local service provider, we're uniquely positioned to understand and address the specific pest challenges in your area, and we're dedicated to delivering the best solutions.
                      </p>

                      <p>
                       <h5>Transparency:</h5>We value open and honest communication. From our pricing to the details of our services, you can always expect transparency and integrity in our interactions.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="tp-about-img-box p-relative d-inline-block mb-30">
                <div className="about-page-img">
                  <img src="assets/img/about/about.png" alt="" />
                </div>
                <div className="dots-img">
                  <img src="assets/img/about/dot.jpg" alt="" />
                </div>
                <div className="about-info-box d-flex flex-column justify-content-center text-center">
                  <h3 className="box-title">5</h3>
                  <h4 className="box-subtitle">
                    Year of <br />
                    Experience
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
