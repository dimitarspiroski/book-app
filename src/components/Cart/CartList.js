import React from "react";
import CartBook from "./CartBook";

export default function CartList({ value }) {
  const { cart } = value;
  return (
    <div className="container-fluid">
      {cart.map(book => {
        return <CartBook key={book.id} book={book} value={value} />;
      })}
    </div>
  );
}
