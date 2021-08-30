import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ book, value }) {
  const { cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container d-flex justify-content-end">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize">
            <h5>
              <span className="text-title">total: </span>
              <strong>${cartTotal}</strong>
            </h5>
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase my-3 px-4"
                type="button"
                onClick={() => clearCart()}
              >
                clear
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
