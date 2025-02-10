

import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function Orders() {
  const purchaseHistory = useSelector(state => state.purchase);

  return (
    <div className="container mt-4">
      {purchaseHistory.length > 0 ? (
        <div className="card p-3">
          <h1 className="text-center text-primary">Purchase History</h1>
          {purchaseHistory.map((item, index) => (
            <div key={index} className="border p-3 mb-3">
              <p className="fw-bold">Date: {item.date}</p>
              <p className="text-success">Total Amount: ${item.finalPrice.toFixed(2)}</p>
              <ul className="list-group">
                {item.items.map((product, idx) => (
                  <li key={idx} className="list-group-item"><img src={product.image}/>  
                    {product.name} - ${product.price.toFixed(2)} x {product.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-danger">No purchase history</p>
      )}
    </div>
  );
}

export default Orders;
