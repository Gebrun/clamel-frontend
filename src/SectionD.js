import React from "react";

const SectionD = () => {
  return (
    <div>
      <section id="section-d" className="grid">
        <div className="box">
          <h2 className="content-title">Contact Us</h2>
          <p>
            Contact us for a free estimation of your desired design project via
            e-mail or mobile and don't forget to hit the like/follow button on
            our social media pages!
          </p>
          <p>contact@clamelconstruction.com</p>
          <p>+ 1 (204) 914-4624</p>
          <ul className="social-media">
            <li>
              <a
                href="https://www.facebook.com/clamelconstruction"
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/Clamel+Construction/@49.6926809,-97.2687444,17z/data=!3m1!4b1!4m5!3m4!1s0x52c1e7624cf476e3:0x48e30cefcb4c9716!8m2!3d49.6926809!4d-97.2665557"
                target="_blank"
              >
                <i className="fab fa-google"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="box">
          <h2 className="content-title">About our company</h2>
          <p>
            Since 2018, our aim is to play a valuable part in using our skills
            to serve our community.
            <br />
            <br />
            We provide a personalized approach towards all our projects, taking
            into consideration our customer’s needs and budgets.
            <br />
            <br />
            Whether you need a full renovation solution or you need us to pick
            it up where you left off, no job is too small or too big for us.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SectionD;


