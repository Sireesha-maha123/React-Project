
import { Link } from "react-router-dom";

function Home() {
  // Category Data
  const categories = [
    {
      name: " Vegetables",
      image: "allveg.jpg",
      link: "/veg",
      
    },
    {
      name: " Non-Veg",
      image: "allnonveg.jpg",
      link: "/nonveg",
    
    },
    {
      name: "Dairy & Milk",
      image: "milkpro1.jpg",
      link: "/milk",
      
    },
    {
      name: "Leafy Veg",
      image: "alllefy.jpg",
      link: "/lefyVeg",
      
    },
    {
      name: "Fruits",
      image: "allfruits.jpg",
      link: "/fruits",
      
    },
  ];

  return (
    <div className="container mt-5 ">
      {/* Title */}
      <div className="text-center ">
        <h1 className="fw-bold text-success" style={{ width: "90%" }}>🛒 Welcome to Fresh Mart</h1>
        <h3 className="text-muted">Fresh & Healthy Food Delivered to You</h3>
      </div>

      {/* Category Grid */}
      <div className="row justify-content-center">
        {categories.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className={`card shadow-sm text-white hover-shadow-lg hover-translate ${item.bgColor} text-white`}>
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h4 className="card-title fw-bold">{item.name}</h4>
                <Link to={item.link} className="btn btn-light fw-bold">
                  Explore ➡️
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
