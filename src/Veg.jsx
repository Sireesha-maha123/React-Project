
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addToCart } from "./Store";

function Veg() {
  const dispatch = useDispatch();
  const vegItems = useSelector((state) => state.products.veg);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(vegItems);
  const [pageNumber, setPageNumber] = useState(1);

  const perPage = 4; // Number of items per page
  const totalPages = Math.ceil(filteredItems.length / perPage);

  // Handle search
  const handleSearch = () => {
    const results = vegItems.filter((item) =>
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

  // Get items to display on the  page
  const pageStartIndex = (pageNumber - 1) * perPage;
  const pageEndIndex = pageStartIndex + perPage;
  const currentItems = filteredItems.slice(pageStartIndex, pageEndIndex);

  return (
    <div className="container mt-5">
      {/* Page Title */}
      <div className="text-center mb-4">
        <h1 className="text-success fw-bold">Veg Page</h1>
        <h2 className="text-muted">Here we have all Veg Items Only</h2>
      </div>

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

      {/* Items  */}
      <div className="row g-3">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body text-center d-flex flex-column align-items-center  w-200">
                  <h5 className="card-title fw-bold">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="mb-4"
                      fluid
                      style={{ maxWidth: "80px", height: "80px" }}
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

export default Veg;
