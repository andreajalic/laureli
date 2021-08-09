import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a {
    color: black;
  }
  li {
    padding: 18px 10px;
    color: rgba(84, 71, 56, 1);
    text-transform: uppercase;
    line-height: 1.7;
    letter-spacing: 0.2em;
    font-size: 12px;
    text-align: left;
    font-family: "Roboto";
    font-weight: 300;
    font-style: normal;
  }
  li > select {
    border: none;
    background: inherit;

    color: rgba(84, 71, 56, 1);
    text-transform: uppercase;
    line-height: 1.7;
    letter-spacing: 0.2em;
    font-size: 12px;
    text-align: left;
    font-family: "Roboto";
    font-weight: 300;
    font-style: normal;
    outline: none;
  }

  #dropdown {
    width: 85px;
  }
  #dropdown option {
    width: 150px;
  }
  option {
    padding: 18px 10px;
    color: rgba(84, 71, 56, 1);
    text-transform: uppercase;
    line-height: 1.7;
    letter-spacing: 0.2em;
    font-size: 12px;
    text-align: left;
    font-family: "Roboto";
    font-weight: 300;
    font-style: normal;
  }
  img {
    display: none;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    background-color: #ded8cc;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 3.5rem;
    align-items: center;
    transition: transform 0.3s easy-in-out;
    li {
      color: black;
      font-weight: lighter;
      font-family: Roboto;
    }
    img {
      width: 230px;
      height: 120px;
      object-fit: contain;
      display: flex;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <img
        src="https://laurelicornerco.files.wordpress.com/2021/05/cropped-logo-ivana-e1622049862264.png"
        alt=""
      />

      <li onClick={open}>
        <Link to="/">Naslovnica</Link>
      </li>

      <li onClick={open}>
        <Link to="/usluge">Usluge</Link>
      </li>

      <li onClick={open}>
        <Link to="/edukacije">Edukacije</Link>
      </li>
      <li onClick={open}>
        <Link to="/o-nama">O nama</Link>
      </li>
      <li onClick={open}>
        <Link
          style={{
            background: "rgba(182, 167, 65, 0.1)",
            borderRadius: "10px",
            padding: "1rem",
          }}
          to="/kontakt"
        >
          Kontakt
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
