import { useDispatch, useSelector } from "react-redux";
import { addPurchaseDetails, clearCart, decrement, increment, remove } from "./Store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [showDiscount, setShowDiscount] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponCodeDiscountPer, setCouponCodeDiscountPer] = useState(0);
  const [showCouponCode, setShowCouponCode] = useState(false);

  const totalprice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const discountAmount = (totalprice * discountPercentage) / 100;
  const couponDiscountAmount = (totalprice * couponCodeDiscountPer) / 100;
  const finalAmount = totalprice - discountAmount - couponDiscountAmount;

  const handleCouponPer = () => {
    const coupons = {
      'RATAN10': 10,
      'RATAN20': 20,
      'RATAN30': 30,
      'RATAN40': 40
    };
    const upperCode = couponCode.toUpperCase();
    if (coupons[upperCode] !== undefined) {
      setCouponCodeDiscountPer(coupons[upperCode]);
      setShowCouponCode(true);
    } else {
      alert("Invalid coupon code");
      setCouponCodeDiscountPer(0);
      setShowCouponCode(false);
    }
  };

  const handleCompletePurchase = () => {
    const purchaseDate = new Date().toLocaleDateString();
    const purchaseDetails = { items: [...cartItems], finalPrice: finalAmount, date: purchaseDate };
    dispatch(clearCart());
    dispatch(addPurchaseDetails(purchaseDetails));
  };

  return (
    <div className="container mt-4">
      {cartItems.length > 0 ? (
        <div className="card p-3">
          <h2 className="text-center text-primary">Your Cart</h2>
          <ul className="list-group mb-3">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - ${item.price} - Quantity: {item.quantity}
                <div>
                  <button className="btn btn-success mx-1" onClick={() => dispatch(increment(item))}>+</button>
                  <button className="btn btn-warning mx-1" onClick={() => dispatch(decrement(item))}>-</button>
                  <button className="btn btn-danger mx-1" onClick={() => dispatch(remove(item))}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          
          <p className="text-info">Total Price: ${totalprice.toFixed(2)}</p>
          {showDiscount && (
            <div>
              <p>Discount: {discountPercentage}%</p>
              <p>Discount Amount: ${discountAmount.toFixed(2)}</p>
            </div>
          )}

          <p className="text-success">Final Amount: ${finalAmount.toFixed(2)}</p>
          <div className="mb-3">
            {[10, 20, 30].map(percent => (
              <button key={percent} className="btn btn-outline-primary m-1" onClick={() => { setDiscountPercentage(percent); setShowDiscount(true); }}>
                {percent}% Discount
              </button>
            ))}
          </div>
          
          <div className="mb-3">
            <input type="text" className="form-control w-50 d-inline" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Enter Coupon Code" />
            <button className="btn btn-primary mx-2" onClick={handleCouponPer}>Apply Coupon</button>
          </div>
          {showCouponCode && (
            <div>
              <p>Coupon Applied: {couponCode}</p>
              <p>Coupon Discount: ${couponDiscountAmount.toFixed(2)}</p>
            </div>
          )}

          <button className="btn btn-success w-100" onClick={handleCompletePurchase}>Complete Purchase</button>
        </div>
      ) : (
        <p className="text-center text-danger">Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
