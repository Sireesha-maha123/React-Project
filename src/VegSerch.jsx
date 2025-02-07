// import { useState } from "react";
// import { useDispatch } from "react-redux";

// function VegSerch(){
//     let dispatch=useDispatch();
//      const [searchItem,setSearchItem]=useState(0);
//    const [filter,setFilter]=useState(veg);   
//     let handlesearch=()=>{
//         veg.map((item)=>{
//             (item.name.include(searchItem)&&setFilter(item))
//         })
//     }
//    return(
//         <>
//         <input type="text" value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
//         <button onClick={handlesearch}>Search</button>
//         {
//            filter.length>0?
//             <div>
//                 <p>{filter}</p>
//             </div>
//         }
        
        
//          </>
//      )
//  }