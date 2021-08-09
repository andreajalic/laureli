import React from "react";
import "./about.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Footer from "../Nav/Footer";
function About() {
  return (
    <div
      className="aboutContainer"
      style={{
        background: "rgba(150, 110, 50, 0.2)",
      }}
    >
      <h1 className="o-nama">O NAMA</h1>
      <hr
        style={{
          backgroundColor: "rgba(152, 115, 76, 0.8)",
          width: "70%",
          display: "flex",

          margin: "auto",
        }}
      />
      <div className="pictures">
        <div>
          <img
            src="https://mail.google.com/mail/u/0?ui=2&ik=ba7d068381&attid=0.5&permmsgid=msg-f:1687138508043375037&th=1769eb88c2ced1bd&view=att&disp=safe&realattid=d00de8aadf281fa3_0.5"
            alt=""
            style={{
              height: "200px",
              width: "200px",
              objectFit: "cover",
              borderRadius: "50%",
              padding: "4px",
              background: "rgba(152, 115, 76, 0.8)",
            }}
          />
          <h4
            className="names"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            Ivana Jalić
          </h4>
        </div>

        <div>
          <img
            src="https://laurelicornerco.files.wordpress.com/2021/06/whatsapp-image-2021-06-02-at-18.58.46.jpeg?w=150"
            alt=""
            style={{
              height: "200px",
              width: "200px",
              objectFit: "cover",
              borderRadius: "50%",
              padding: "4px",
              background: "rgba(152, 115, 76, 0.8)",
            }}
          />

          <h4
            className="names"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            Tina Kilić
          </h4>
        </div>
      </div>
      <MDBContainer style={{ marginBottom: "5rem" }}>
        <MDBRow className="box">
          <MDBCol lg="6" className="box-col">
            <div className="box-text">
              <p className="o-nama-tekst">
                Laureli Corner digitalna je marketinška agencija specijalizirana
                za društvene mreže. Osim komunikacijskih strategija, ono na što
                obraćamo posebnu pažnju zasigurno su estetika i vizualna
                strategija. Iz tog razloga, kod nas možeš pronaći sve potrebno
                za kvalitetno upravljanje društvenim mrežama, a ono što ti
                možemo osigurati su estetski privlačna i kreativna rješenja koja
                će ti generirati željene rezultate. Mi smo Ivana i Tina i
                dostupne smo za sva pitanja!
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <MDBContainer style={{ marginBottom: "1rem" }}>
        <MDBRow>
          <MDBCol
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "3rem",
            }}
          >
            <h5>KONTAKT INFORMACIJE</h5>
            <h6 style={{ display: "flex" }}>
              Radno vrijeme:
              <p style={{ marginLeft: "0.2rem" }}> 09:00-17:00</p>
            </h6>
            <h6>
              <a
                href="mailto:laureli.corner@gmail.com"
                style={{ color: "black" }}
              >
                Email: laureli.corner@gmail.com
              </a>
            </h6>
            <h6 style={{ display: "flex" }}>
              Mobitel: <p style={{ marginLeft: "0.2rem" }}> 095 531 2757</p>
            </h6>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        style={{
          background: "white",
          display: "grid",
          paddingBottom: "3rem",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            textTransform: "uppercase",
            fontWeight: "lighter",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            letterSpacing: "0.2em",
            marginBottom: "3rem",
            fontFamily: "Roboto",
            fontWeight: "300",
            fontStyle: "normal",
            fontSize: "larger",
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          pogledaj naš Instagram!
        </h3>

        <div class="powr-social-feed" id="52e0dff9_1624965601"></div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
