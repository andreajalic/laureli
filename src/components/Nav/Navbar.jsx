import React, { useState } from "react";
import Burger from "./Burger";
import styled from "styled-components";
import { MDBNavbar } from "mdbreact";
import { Link } from "react-router-dom";
const Nav = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;

  img {
    width: 200px;
    height: 50px;
    object-fit: cover;
  }
`;

const Image = styled.div`
  background-image: url("https://laurelicornerco.files.wordpress.com/2021/05/unnamed-7.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;

  @media (max-width: 768px) {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100%;
  }
`;

function Navbar() {
  return (
    <MDBNavbar color="white" dark expand="md" fixed="top" scrolling transparent>
      <Nav>
        <Link to="/">
          {" "}
          <div className="logo">
            <img
              src="https://laurelicornerco.files.wordpress.com/2021/05/cropped-logo-ivana-e1622049862264.png"
              alt=""
            />
          </div>
        </Link>
        <Burger />
      </Nav>
    </MDBNavbar>
  );
}

export default Navbar;
