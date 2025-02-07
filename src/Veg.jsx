// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "./Store";

// function Veg(){

//     let dispacth=useDispatch();
//     // let cartItems=useSelector(state=>state.cart);
//     // let finalcartItems=cartItems.map((item,index)=> (<li key={index}>
//     //     {item.name}-${item.price}-Quatity:{item.quantity}
//     //     <button onClick={()=>dispacth(increment(item))}>+</button>
//     //     <button onClick={()=>dispacth(decrement(item))}>-</button>
//     //     <button onClick={()=>dispacth(remove(item))}>Remove</button> 
//     // </li>))
//     let vegItems=useSelector(state=>state.products.veg)
//     let finalItems=vegItems.map((item,index)=>
//         (<li key={index}>{item.name}-{item.price}
//         <button onClick={()=>dispacth(addToCart(item))}>AddtoCart</button></li>))
//     return(
//         <>
//         <h1 style={{color:"green"} }>This is VegPage ves.jsx</h1>
//         <h1 style={{color:"green"}}>Here we have all VegItems Only</h1>
//         <img src="th.jpg"></img>
//         <ol>{finalItems}</ol>
//         {/* <ul>{finalcartItems}</ul> */}
//         </>
//     )
// }
// export default Veg;
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "./Store";

// function Veg() {
//   let dispatch = useDispatch();
//   let vegItems = useSelector((state) => state.products.veg);

//   let finalItems = vegItems.map((item, index) => (
//     <div key={index} className="col-md-4 mb-4">
//       <div className="card shadow-sm">
//         {/* <img src="th.jpg" className="card-img-top" alt={item.name} /> */}
//         <div className="card-body">
//           <h5 className="card-title">{item.name}</h5>
//           <p className="card-text">Price: ${item.price}</p>
//           <button
//             className="btn btn-success w-100"
//             onClick={() => dispatch(addToCart(item))}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <>
//       <div className="container mt-5">
//         <h1 className="text-center text-success mb-4">Veg Page</h1>
//         <h2 className="text-center mb-5">Here we have all Veg Items Only</h2>
//         <div className="row">
//           {finalItems}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Veg;
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";


function Veg() {
  let dispatch = useDispatch();
  let vegItems = useSelector((state) => state.products.veg);

  let finalItems = vegItems.map((item, index) => (
    <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="card shadow-sm">
        {/* <img src="th.jpg" className="card-img-top" alt={item.name} /> */}
        <div className="card-body text-center">
          <h5 className="card-title fw-bold"><img src={item.image}/>  
          <br></br>{item.name}</h5>
          <p className="card-text text-muted">Price: <span className="text-success fw-bold">${item.price}</span></p>
          <button
            className="btn btn-success w-100"
            onClick={() => dispatch(addToCart(item))}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container mt-5">
      <h1 className="text-center text-success mb-4 fw-bold">🥦 Veg Page</h1>
      <h2 className="text-center mb-5 text-muted">Here we have all Veg Items Only</h2>
      <div className="row">
        {finalItems}
      </div>
    </div>
  );
}

export default Veg;
