
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCarrot, 
  faLeaf, 
  faDrumstickBite,
  faCoffee,
  faCartShopping, 
  faClipboardList,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import Fruits from "./Fruits";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons/faAppleAlt";
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
            <Link to="/home" className="navbar-brand"> Fresh Mart....🛒
              
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
                  <Link to="/home" className="nav-link"><FontAwesomeIcon icon={faHome} title="Home" />Home</Link>
                  
                </li>
                <li className="nav-item">
                  <Link to="/veg" className="nav-link"> <FontAwesomeIcon icon={faCarrot} title="Carrot" />Veg</Link>
                </li>
                <li className="nav-item">
                  <Link to="/nonveg" className="nav-link"> <FontAwesomeIcon icon={faDrumstickBite} title="Chicken" />NonVeg</Link>
                </li>
                <li className="nav-item">
                  <Link to="/milk" className="nav-link"><FontAwesomeIcon icon={faCoffee} title="Milk" /> Milk</Link>
                </li>
                <li className="nav-item">
                  <Link to="/lefyveg" className="nav-link"><FontAwesomeIcon icon={faLeaf} title="lefyVeg" /> LeafyVeg</Link>
                </li>
                <li className="nav-item">
                  <Link to="/fruits" className="nav-link"><FontAwesomeIcon icon={faAppleAlt} title="Home" /> Fruits</Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link"><FontAwesomeIcon icon={faCartShopping} title="Cart" />Cart <span className="badge bg-danger">{totalItems}</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/orders" className="nav-link"><FontAwesomeIcon icon={faClipboardList} title="Orders" />Orders</Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link"><FontAwesomeIcon icon={faUserAlt} title="AboutUs" />About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link"><FontAwesomeIcon icon={faPhone} title="ContactUs" />Contact Us</Link>
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
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/lefyveg" element={<LefeyVeg/>} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/fruits"element={<Fruits/>}/>
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
