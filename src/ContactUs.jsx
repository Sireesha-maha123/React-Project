// function ContactUs(){
//     return(
//         <>
//         <h1 style={{color:"hotpink"}}>This is ContactUs page ,ContactUs.jsxs</h1>
//         </>
//     )
// }
// export default ContactUs;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>

      <div className="mt-4 text-center">
        <p>Email: support@company.com</p>
        <p>Phone: +919343544767</p>
      </div>
    </div>
  );
};

export default ContactUs;
