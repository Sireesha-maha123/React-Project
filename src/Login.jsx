// import { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { login } from "./Store";

// function Login(){
//   let  username=useRef(null);
//   let password=useRef(null);
//   let dispatch=useDispatch();
//   let navigate=useNavigate();
//   // const location=useDispatch();
//   // const redirectPath=location.state?.from ||"/home";
//   let  loginCheck= ()=>{
//      if(username.current.value==="Sireesha" && password.current.value==="Maha@123"){
//        dispatch(login(username.current.value)) 
//        navigate("/Home");
//      }
//      else
//      {
//         alert("Your crenditals are wrong.check once!");
//      }
//   }
//   return(
//     <>
//     <h2>Login page</h2>
//     <label>USerName:</label>
//     <input type='text' ref={username}/><br></br>
//     <label>PassWord:</label>
//     <input type='password'ref={password}/><br></br>
//     <button style={{backgroundColor:'green'}} onClick={loginCheck}>LogIn</button>
//     </>
//   )
// }
// export default Login;
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";

function Login() {
  let username = useRef(null);
  let password = useRef(null);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let loginCheck = () => {
    if (username.current.value === "Sireesha" && password.current.value === "Maha@123") {
      dispatch(login(username.current.value));
      navigate("/home");
    } else {
      alert("Your credentials are wrong. Check once!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center text-primary">🔐 Login</h2>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" ref={username} className="form-control" placeholder="Enter your username" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" ref={password} className="form-control" placeholder="Enter your password" />
        </div>
        <button className="btn btn-success w-100" onClick={loginCheck}>
          Log In
        </button>
      </div>
    </div>
  );
}

export default Login;
