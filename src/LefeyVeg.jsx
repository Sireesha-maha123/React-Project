// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "./Store";

// function LefeyVeg(){
//     let dispatch = useDispatch();
//   let lefyItems = useSelector((state) => state.products.lefyVeg);

//   let finalItems = lefyItems.map((item, index) => (
//     <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
//       <div className="card shadow-sm">
//         {/* <img src="th.jpg" className="card-img-top" alt={item.name} /> */}
//         <div className="card-body text-center">
//           <h5 className="card-title fw-bold"><img src={item.image}/>  
//           <br></br>{item.name}</h5>
//           <p className="card-text text-muted">Price: <span className="text-success fw-bold">${item.price}</span></p>
//           <button
//             className="btn btn-success w-100"
//             onClick={()=>dispatch(addToCart(item))}
//           >
//             🛒 Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center text-success mb-4 fw-bold"> LefyVeg Page</h1>
//       <h2 className="text-center mb-5 text-muted">Here we have all </h2>
//       <div className="row">
//         {finalItems}
//       </div>
//     </div>
//   );
// }
// export default LefeyVeg;
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./Store";

function LefeyVeg() {
  let dispatch = useDispatch();
  let lefyItems = useSelector((state) => state.products.lefyVeg);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(lefyItems);
  const [pageNumber, setPageNumber] = useState(1);

  const perPage = 4; // Number of items per page
  const totalPages = Math.ceil(filteredItems.length / perPage);

  // Handle search
  const handleSearch = () => {
    const results = lefyItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
    setPageNumber(1); // Reset to the first page after search
  };

  // Handle page change
  const handlePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setPageNumber(page);
    }
  };

  // Get items to display on the current page
  const pageStartIndex = (pageNumber - 1) * perPage;
  const pageEndIndex = pageStartIndex + perPage;
  const currentItems = filteredItems.slice(pageStartIndex, pageEndIndex);

  return (
    <div className="container mt-5">
      {/* Page Title */}
      <h1 className="text-center text-success mb-4 fw-bold">LefyVeg Page</h1>
      <h2 className="text-center mb-5 text-muted">Here we have all Lefy Vegetables</h2>

      {/* Search Bar */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50 p-2 me-2"
          placeholder="🔍 Search for a vegetable..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-success px-4" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Items */}
      <div className="row g-3">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center d-flex flex-column">
                  <h5 className="card-title fw-bold">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="mb-3"
                      fluid
                      style={{ maxWidth: "50px", height: "50px" }}
                    />
                    <br />
                    {item.name}
                  </h5>
                  <p className="card-text text-muted flex-grow-1">
                    Price: <span className="text-success fw-bold">${item.price}</span>
                  </p>
                  <button
                    className="btn btn-success mt-auto"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    🛒 Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger fw-bold mt-3">⚠️ No items found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-success me-2"
          onClick={() => handlePage(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`btn ${pageNumber === index + 1 ? "btn-success" : "btn-outline-success"} me-2`}
            onClick={() => handlePage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="btn btn-outline-success ms-2"
          onClick={() => handlePage(pageNumber + 1)}
          disabled={pageNumber === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default LefeyVeg;

