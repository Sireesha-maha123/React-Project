// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// import "./App.css"
// import "./Navbar.css"
// import Home from "./Home";
// import Veg from "./Veg";
// import NonVeg from "./NonVeg";
// import Cart from "./Cart";
// import Orders from "./Orders";
// import AboutUs from "./AboutUS";
// import ContactUs from "./ContactUs";
// import { useDispatch, useSelector } from "react-redux";
// import Login from "./Login";
// import { logout } from "./Store";
// import NotFound from "./NotFound";
// import Milk from "./Milk";

// function App(){
//    let cart=useSelector(state => state.cart);
//    let totalItems=cart.reduce((sum,item) => sum+item.quantity,0); 
//    let auth=useSelector((state)=>state.auth)
//    let  isAuthenticated=auth.isAuthenticated;
//    let user=auth.user;
//    let dispatch =useDispatch();
//   return(
//     <>
//     <BrowserRouter>
//     <nav className="navbar">
//     <Link to='/home' className="linkstyle">Home</Link>
//     <Link to='/veg'className="linkstyle">Veg</Link>
//     <Link to='/nonveg' className="linkstyle">NonVeg</Link>
//     <Link to='/milk'className="linkstyle">Milk</Link>
//     <Link to='/cart' className="linkstyle">Cart<span>{totalItems}</span></Link>
//     <Link to='/orders' className="linkstyle">Orders</Link>
//     <Link to='/aboutus'className="linkstyle">AboutUS</Link>
//     <Link to='/contactus'className="linkstyle">ContactUs</Link>
//     <Link to='/notfound'className="linkstyle">NotFound</Link>
    
//     {
//       isAuthenticated? (
//         <div>
//         <span className="welcome">welcome,{user}!</span>
//         <button onClick={ ()=> dispatch(logout())}
//         className="logout-btn">logOut</button>
//         </div>
//       ):
//       (
//         <Link to='/login'className="linkstyle">SignIN</Link>
//       )
//     }
//    </nav>
//       <Routes>
//       <Route path="/home" element={<Home/>}/>
//       <Route path="/veg" element={<Veg/>}/>
//       <Route path="/nonveg" element={<NonVeg/>}/>
//       <Route path="/milk"element={<Milk/>}/>
      
//       <Route path="/cart" element={<Cart/>}/>
//       <Route path="/orders" element={<Orders/>}/>
//       <Route path="/aboutus" element={<AboutUs/>}/>
//       <Route path="/contactus" element={<ContactUs/>}/>
//       <Route path="/login" element={<Login/>}/>
//       <Route path="*" element={<NotFound/>}/>

//     </Routes>
//     </BrowserRouter>
    
    
//     </>
//   )
// }
// export default App;

// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

// import Home from "./Home";

// import Veg from "./Veg";

// import NonVeg from "./NonVeg";

// import Cart from "./Cart";

// import Orders from "./Orders";

// import AboutUs from "./AboutUS";

// import ContactUs from "./ContactUs";

// import { useDispatch, useSelector } from "react-redux";

// import Login from "./Login";

// import { logout } from "./Store";

// import NotFound from "./NotFound";

// import Milk from "./Milk";



// function App() {

//   let cart = useSelector((state) => state.cart);

//   let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

//   let auth = useSelector((state) => state.auth);

//   let isAuthenticated = auth.isAuthenticated;

//   let user = auth.user;

//   let dispatch = useDispatch();



//   return (

//     <BrowserRouter>

//       <nav className="navbar navbar-align-lg navbar- bg-bold primary px-4 fixed-top d-flex align-items-center">

//         <Link to="/home" className="navbar-brand fw-bold">🛒 MyShop</Link>

//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">

//           <span className="navbar-toggler-icon"></span>

//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">

//           <ul className="navbar-nav ms-auto">

//             <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>

//             <li className="nav-item"><Link to="/veg" className="nav-link">Veg</Link></li>

//             <li className="nav-item"><Link to="/nonveg" className="nav-link">NonVeg</Link></li>

//             <li className="nav-item"><Link to="/milk" className="nav-link">Milk</Link></li>

//             <li className="nav-item">

//               <Link to="/cart" className="nav-link">Cart <span className="badge bg-warning">{totalItems}</span></Link>

//             </li>

//             <li className="nav-item"><Link to="/orders" className="nav-link">Orders</Link></li>

//             <li className="nav-item"><Link to="/aboutus" className="nav-link">About Us</Link></li>

//             <li className="nav-item"><Link to="/contactus" className="nav-link">Contact Us</Link></li>

//           </ul>

//         </div>

//         {isAuthenticated ? (

//           <div className="d-flex align-items-center">

//             <span className="text-white me-3 fw-bold">👋 Welcome, {user}!</span>

//             <button className="btn btn-danger" onClick={() => dispatch(logout())}>Logout</button>

//           </div>

//         ) : (

//           <Link to="/login" className="btn btn-light">Sign In</Link>

//         )}

//       </nav>



//       <div className="container mt-4">

//         <Routes>

//           <Route path="/home" element={<Home />} />

//           <Route path="/veg" element={<Veg />} />

//           <Route path="/nonveg" element={<NonVeg />} />

//           <Route path="/milk" element={<Milk />} />

//           <Route path="/cart" element={<Cart />} />

//           <Route path="/orders" element={<Orders />} />

//           <Route path="/aboutus" element={<AboutUs />} />

//           <Route path="/contactus" element={<ContactUs />} />

//           <Route path="/login" element={<Login />} />

//           <Route path="*" element={<NotFound />} />

//         </Routes>

//       </div>

//     </BrowserRouter>

//   );

// }



// export default App;
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Navbar.css";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUS";
import ContactUs from "./ContactUs";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { logout } from "./Store";
import NotFound from "./NotFound";
import Milk from "./Milk";

import LefeyVeg from "./LefeyVeg";

function App() {
  let cart = useSelector((state) => state.cart);
  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  let auth = useSelector((state) => state.auth);
  let isAuthenticated = auth.isAuthenticated;
  let user = auth.user;
  let dispatch = useDispatch();

  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-alert-dark">
          <div className="container">
            <Link to="/home" className="navbar-brand">🛒
              GroceryApp
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/veg" className="nav-link"> 🍏Veg</Link>
                </li>
                <li className="nav-item">
                  <Link to="/nonveg" className="nav-link"> 🍗NonVeg</Link>
                </li>
                <li className="nav-item">
                  <Link to="/milk" className="nav-link"> 🥛Milk</Link>
                </li>
                <li className="nav-item">
                  <Link to="/lefyveg" className="nav-link"> LefyVeg</Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">🛒Cart <span className="badge bg-danger">{totalItems}</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/orders" className="nav-link">Orders</Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link">Contact Us</Link>
                </li>
               
              <div className="d-flex align-items-center">
                {isAuthenticated ? (
                  <div className="d-flex align-items-center">
                    <span className="text-light me-3">Welcome, {user}!</span>
                    <button
                      onClick={() => dispatch(logout())}
                      className="btn btn-danger btn-sm"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <Link className="btn btn-outline-light btn-sm" to="/login">
                    Sign In
                  </Link>
                )}
               </div>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/lefyveg" element={<LefeyVeg/>} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
