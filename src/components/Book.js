import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BookConsumer } from "../context";
import PropTypes from "prop-types";

export default class Book extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.book;
    return (
      <BookWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <BookConsumer>
            {value => {
              return (
                <div
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src={img} alt="book-img" className="card-img-top" />
                  </Link>
                  <button
                    className="cart-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        in cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus" />
                    )}
                  </button>
                </div>
              );
            }}
          </BookConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0" style={{ minHeight: "75px" }}>
              {title}
            </p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </BookWrapper>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const BookWrapper = styled.div`
  .card {
    border-color: 0.04rem solid rgba(0, 0, 0, 0.1);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.2s linear;
  }
  &:hover {
    .card {
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.2s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    border-radius: 0.2rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.2s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainDark);
    cursor: pointer;
  }
`;
