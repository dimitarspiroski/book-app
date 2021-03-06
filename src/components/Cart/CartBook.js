import React from "react";

export default function CartItem({ book, value }) {
  const { id, title, img, price, total, count, inStock } = book;
  const { increment, decrement, removeBook } = value;
  return (
    <div className="row my-3 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "6rem" }}
          className="img-fluid "
          alt="book-img"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">book: </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: </span>${price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <button
              className="btn btn-black mx-1"
              onClick={() => decrement(id)}
            >
              -
            </button>
            <span className="btn btn-black mx-1">{count}</span>
            <button
              className="btn btn-black mx-1"
              onClick={() => increment(id)}
              disabled={inStock === count}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeBook(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: ${total}</strong>
      </div>
    </div>
  );
}
