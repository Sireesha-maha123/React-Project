// function AboutUs(){
//     return(
//         <>
//         <h1 style={{color:"rosybrown"}} >This is  AboutUs page</h1>
//         <h1 style={{color:"rosybrown"}}>this aboutus.jsx</h1>
//         </>
//     )
// }
// export default AboutUs;
import "bootstrap/dist/css/bootstrap.min.css";

function AboutUs() {
  return (
    <div className="container text-center mt-5">
      <div className="card p-4 shadow-lg">
        <h1 className="text-primary">About Us</h1>
        <p className="text-muted">
          Welcome to our website! We are dedicated to providing the best services to our customers.
        </p>
        <p className="text-muted">
          Our team is committed to delivering quality products and ensuring customer satisfaction.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
