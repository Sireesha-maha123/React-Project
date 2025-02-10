
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">

      {/* Hero Section */}
      <section className="hero-section bg-success text-white text-center py-5">
        <div className="container">
          <h1 className="display-3 font-weight-bold">Welcome to FreshMart</h1>
          <p className="lead">Your one-stop online grocery store delivering fresh and organic products to your doorstep.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="freshma.jpg" width={800} alt="Our Story" className="img-fluid rounded shadow-lg" />
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h2 className="h2 font-weight-bold">Our Story</h2>
              <p>
                FreshMart started with a simple mission: to bring high-quality, fresh groceries right to your door. We’re passionate about offering only the best organic produce and pantry essentials, all sourced directly from trusted local farms and suppliers.
              </p>
              <p>
                Our journey began in 2020, with a small team of food lovers and experts who wanted to revolutionize the way people shop for groceries. Today, we’re proud to serve thousands of satisfied customers, providing fresh products that make healthy living easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission bg-light py-5">
        <div className="container">
          <h2 className="text-center font-weight-bold">Our Mission</h2>
          <p className="text-center">
            At FreshMart, our mission is simple: to make healthy eating accessible to everyone. We believe that good food should not only taste amazing but also nourish your body. That's why we’re dedicated to providing fresh, organic, and sustainably sourced groceries at competitive prices.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values py-5">
        <div className="container">
          <h2 className="text-center font-weight-bold mb-4">Our Values</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-light">
                <div className="card-body">
                  <h3 className="card-title text-success">Freshness</h3>
                  <p className="card-text">We prioritize freshness by sourcing our products daily from trusted local farms.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-light">
                <div className="card-body">
                  <h3 className="card-title text-success">Quality</h3>
                  <p className="card-text">Only the highest quality produce, pantry staples, and groceries make it to your doorstep.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-light">
                <div className="card-body">
                  <h3 className="card-title text-success">Sustainability</h3>
                  <p className="card-text">We care about the environment, and we take sustainable sourcing and packaging seriously.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section
      <section className="contact-us bg-light py-5">
        <div className="container text-center">
          <h2 className="font-weight-bold">Contact Us</h2>
          <p>If you have any questions or need help, feel free to reach out to us!</p>
          <div>
            <p>Email: <a href="mailto:support@freshmart.com" className="text-success">support@freshmart.com</a></p>
            <p>Phone: +91 9394576691</p>
            <p>Address: 123 FreshMart Lane, Ammerpet, INDIA</p>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center py-3">
        <p className="mb-0">© 2025 FreshMart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
