// 
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function NonVeg() {
  let dispatch = useDispatch();
  let nonvegItems = useSelector((state) => state.products.nonVeg);

  let finalItems = nonvegItems.map((item, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card shadow-sm">
        {/* <img src="th.jpg" className="card-img-top" alt={item.name} /> */}
        <div className="card-body">
          <h5 className="card-title"><img src={item.image}/>  
          <br></br>{item.name}</h5>
          <p className="card-text">Price: ${item.price}</p>
          <button
            className="btn btn-success w-100"
            onClick={() => dispatch(addToCart(item))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center text-secondary mb-4">Non-Veg Page</h1>
        <h2 className="text-center mb-5">Here we have all the Non-Veg Items</h2>
        <div className="row">
          {finalItems}
        </div>
      </div>
    </>
  );
}

export default NonVeg;
