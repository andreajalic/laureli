import React, { useState } from "react";
import Ponuda from "./Ponuda";
import { Link } from "react-router-dom";
import Footer from "../Nav/Footer";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBMask,
  MDBInput,
} from "mdbreact";
import Typed from "react-typed";
import emailjs from "emailjs-com";
import Button from "@material-ui/core/Button";

function Naslovna() {
  const [enteredText, setEnteredText] = useState("");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6j5752c",
        "laureli",
        e.target,
        "user_wMOkFPoR2ip1PIXq8n7Dn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEnteredText("");
  }
  return (
    <div
      style={{
        backgroundColor: "rgba(150, 110, 50, 0.4)",
        backgroundImage: `url("https://mail.google.com/mail/u/0?ui=2&ik=ba7d068381&attid=0.3&permmsgid=msg-f:1687144135602444453&th=1769f0a7077798a5&view=att&disp=safe&realattid=c76dabacba63eae0_0.3")`,
        height: "40rem",
      }}
    >
      <MDBMask className="rgba-black-light" />
      <MDBContainer
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100%",
          width: "100%",
          paddingTop: "17rem",
          paddingBottom: "8rem",
        }}
      >
        <MDBRow>
          <MDBCol md="12" className="mb-4 white-text text-center">
            <h1
              className="h1-reponsive black-text text-uppercase  mb-2 pt-md-5 pt-5 "
              style={{
                lineHeight: "1.7",
                letterSpacing: "0.2em",
                textAlign: "left",
                fontFamily: "Roboto",
                fontWeight: "300",
                fontStyle: "normal",
              }}
            >
              Laureli Corner
            </h1>
            <hr className="hr-dark my-4" />
            <div style={{ display: "grid" }}>
              <Typed
                strings={["DIGITALNA AGENCIJA", "Social Media Marketing"]}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop
                style={{ color: "white" }}
              >
                <input
                  type="text"
                  style={{
                    border: "none",
                    background: "inherit",
                    color: "white",
                  }}
                />
              </Typed>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  style={{
                    margin: "1rem",
                    backgroundColor: "rgba(152,115,76,0.8)",
                  }}
                >
                  <h5
                    style={{
                      letterSpacing: "0.2em",
                      marginBottom: "0rem",

                      fontFamily: "Roboto",
                      fontWeight: "300",
                      fontStyle: "normal",
                    }}
                  >
                    <Link style={{ color: "white" }} to="/usluge">
                      USLUGE
                    </Link>
                  </h5>
                </Button>
                <Button
                  variant="contained"
                  style={{
                    margin: "1rem",
                    backgroundColor: "rgba(150,110,50,0.4)",
                  }}
                >
                  <h5
                    style={{
                      letterSpacing: "0.2em",
                      marginBottom: "0rem",
                      fontFamily: "Roboto",
                      fontWeight: "300",
                      fontStyle: "normal",
                    }}
                  >
                    <Link style={{ color: "white" }} to="/kontakt">
                      KONTAKT
                    </Link>
                  </h5>
                </Button>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <Ponuda />
      <div
        style={{
          background: "rgba(182, 167, 65,0.1)",
          borderBottom: "2px solid rgba(150,110,50,0.8)",
          borderTop: "2px solid rgba(150,110,50,0.8)",
        }}
      >
        <MDBContainer style={{ padding: "2rem" }}>
          <MDBRow>
            <form
              style={{
                width: "70%",
                margin: "auto",
              }}
              onSubmit={sendEmail}
            >
              <p
                className="h5 text-center mb-4"
                style={{
                  letterSpacing: "0.1em",
                  marginBottom: "0rem",
                  fontFamily: "Roboto",
                  fontWeight: "300",
                  fontStyle: "normal",
                }}
              >
                Želiš primati najnovije obavijesti?
                <p></p>Preplati se na naš newsletter!
              </p>
              <div
                style={{
                  width: "50%",
                  margin: "auto",
                  color: "rgba(152, 115, 76, 0.8)",
                }}
              >
                <MDBInput
                  name="email"
                  label="Upiši email adresu"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  required
                  onChange={(e) => setEnteredText(e.target.value.email)}
                  value={enteredText}
                />
              </div>
              <div className="text-center">
                <Button
                  style={{
                    backgroundColor: "rgba(152, 115, 76, 0.8)",
                    color: "white",
                    letterSpacing: "0.1em",
                    marginBottom: "0rem",
                    fontFamily: "Roboto",
                    fontWeight: "300",
                    fontStyle: "normal",
                  }}
                  type="submit"
                >
                  Preplati se
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                </Button>
              </div>
            </form>
          </MDBRow>
        </MDBContainer>
      </div>

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

            alignContent: "center",
            alignItems: "center",
            letterSpacing: "0.2em",
            marginBottom: "3rem",
            fontFamily: "Roboto",

            fontStyle: "normal",
            fontSize: "larger",
            marginTop: "3rem",
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

export default Naslovna;
