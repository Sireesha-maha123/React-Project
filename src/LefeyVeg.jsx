import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function LefeyVeg(){
    let dispatch = useDispatch();
  let lefyItems = useSelector((state) => state.products.lefyVeg);

  let finalItems = lefyItems.map((item, index) => (
    <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card shadow-sm">
        {/* <img src="th.jpg" className="card-img-top" alt={item.name} /> */}
        <div className="card-body text-center">
          <h5 className="card-title fw-bold"><img src={item.image}/>  
          <br></br>{item.name}</h5>
          <p className="card-text text-muted">Price: <span className="text-success fw-bold">${item.price}</span></p>
          <button
            className="btn btn-success w-100"
            onClick={()=>dispatch(addToCart(item))}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-5">
      <h1 className="text-center text-success mb-4 fw-bold"> LefyVeg Page</h1>
      <h2 className="text-center mb-5 text-muted">Here we have all </h2>
      <div className="row">
        {finalItems}
      </div>
    </div>
  );
}
export default LefeyVeg;

