import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from "mdbreact";
import Button from "@material-ui/core/Button";
import "./kontakt.css";
import emailjs from "emailjs-com";
import Footer from "../Nav/Footer";

const Kontakt = () => {
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
      id="kontakt"
      style={{
        background: "rgba(150, 110, 50, 0.2)",
      }}
    >
      <MDBContainer className="kontakt-box" style={{ marginBottom: "2rem" }}>
        <MDBRow
          style={{
            background: "beige",
            padding: "2rem",
          }}
        >
          <MDBCol>
            <form className="kontakt-form" onSubmit={sendEmail}>
              <p className="h5 text-center mb-4">Kontaktiraj nas!</p>

              <div style={{ color: "rgba(152, 115, 76, 0.8)" }}>
                <MDBInput
                  name="ime"
                  label="ime"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  required
                  onChange={(e) => setEnteredText(e.target.value.name)}
                  value={enteredText}
                />
                <MDBInput
                  name="email"
                  label="email"
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
                <MDBInput
                  name="naslov"
                  label="naslov"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={(e) => setEnteredText(e.target.value.naslov)}
                  value={enteredText}
                />
                <MDBInput
                  name="poruka"
                  type="textarea"
                  rows="2"
                  label="poruka"
                  icon="pencil-alt"
                  required
                  onChange={(e) => setEnteredText(e.target.value.poruka)}
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
                  Pošalji
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                </Button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Kontakt;
