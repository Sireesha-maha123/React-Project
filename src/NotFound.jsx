import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound(){
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
        navigate("/home")
    },5000)
},[])
return (
<>
<h1>404 page NOtFound</h1>
<img src="th (10).jpg"></img>
</>
)
}
export default NotFound;