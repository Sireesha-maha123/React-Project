// import { useSelector } from "react-redux";

// function Milk(){
   
//     let milkItems=useSelector(state=>state.products.milk)
//     let finalItems=milkItems.map((item,index)=>
//         (<li key={index}>{item.name}-{item.price}
//         <button onClick={()=>dispacth(addToCart(item))}>AddtoCart</button></li>))
//     return(
//         <>

//         <ol>{finalItems}</ol>
//         {/* <ul>{finalcartItems}</ul> */}
//         </>
//     )
// }
// export default Milk;
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function Milk() {
  let dispatch = useDispatch();
  let milkItems = useSelector((state) => state.products.milk);

  let finalItems = milkItems.map((item, index) => (
    <div key={index} className="col-md-4 mb-4">
      <div className="card shadow-sm">
        {/* <img src="th.jpg" className="card-img-top" alt={item.name} /> */}
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5><img src={item.image}/>  
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
        <h1 className="text-center text-secondary mb-4">Milk Page</h1>
        <h2 className="text-center mb-5">Here we have all the Milk Items</h2>
        <div className="row">
          {finalItems}
        </div>
      </div>
    </>
  );
}

export default Milk;

