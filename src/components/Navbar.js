import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 d-flex justify-content-between">
          <Link to="/">
            <span className="navbar-logo">
              <i className="fas fa-book-open " />
            </span>
          </Link>
          <Link to="/form">
            <ButtonContainer>
              <span className="mr-1" id="cart-button">
                add book
              </span>
            </ButtonContainer>
          </Link>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-1" id="cart-button">
                <i className="fas fa-cart-plus" />
                My Cart
              </span>
            </ButtonContainer>
          </Link>
        </NavWrapper>
      </div>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainDark);
  .nav-link {
    color: var(--lightBlue) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
