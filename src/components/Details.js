import React, { Component } from "react";
import { BookConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <BookConsumer>
        {value => {
          const { id, author, img, info, price, title, inCart } =
            value.detailBook;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="img-fluid" alt="book-img" />
                  </div>
                  <div className=" col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2 className="text-title">Book: {title} </h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      author: <span className="text-uppercase">{author}</span>
                    </h4>
                    <h4 className="text-info">
                      <strong>
                        price: <span>$</span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-1">
                      info:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    <div>
                      <Link to="/">
                        <ButtonContainer>Store</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "in cart" : "add to cart"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </BookConsumer>
    );
  }
}
