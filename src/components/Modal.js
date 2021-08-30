import React, { Component } from "react";
import styled from "styled-components";
import { BookConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <BookConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalBook;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-2"
                    >
                      <span id="close-span">
                        <i id="close-button" onClick={() => closeModal()}>
                          X
                        </i>
                      </span>
                      <h4>book added to the cart</h4>
                      <img src={img} className="img-fluid" alt="book-img" />
                      <h5>{title}</h5>
                      <h5 className="text-blue">price: ${price}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          Shop
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </BookConsumer>
    );
  }
}

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  #modal {
    border-radius: 0.3rem;
    background: var(--mainWhite);
  }
  #close-span {
    display: flex;
    justify-content: flex-end;
    #close-button {
      margin-right: 0.2rem;
      cursor: pointer;
      font-style: normal;
      font-size: 1.2rem;
      transition: all 0.2s linear;
      &:hover {
        color: var(--mainBlue);
      }
    }
  }
`;
