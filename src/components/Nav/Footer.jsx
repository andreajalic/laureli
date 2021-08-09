import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter
      className="font-small pt-4 "
      style={{ color: "white", backgroundColor: "rgb(193, 172, 135)" }}
    >
      <MDBContainer
        fluid
        className="text-center text-md-left"
        style={{ backgroundColor: "rgb(193, 172, 135)" }}
      >
        <MDBRow>
          <MDBCol
            md="6"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h5 className="title" style={{ color: "white" }}>
              Laureli Corner
            </h5>
            <p style={{ color: "white" }}>
              Digitalna agencija - Social Media Marketing
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title" style={{ color: "white" }}>
              Kontakt informacije
            </h5>
            <ul>
              <li className="list-unstyled" style={{ color: "white" }}>
                <p>Mobitel: 095 531 2757</p>
              </li>
              <li className="list-unstyled" style={{ color: "white" }}>
                <a
                  href="mailto:laureli.corner@gmail.com"
                  style={{ color: "white" }}
                >
                  Email: laureli.corner@gmail.com
                </a>
              </li>
              <li className="list-unstyled" style={{ color: "white" }}>
                Radno vrijeme: PON-PET: 09:00-17:00
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div
        className="footer-copyright text-center py-3"
        style={{
          color: "white",
          backgroundColor: "rgb(193, 172, 135)",
          borderTop: "0.2px solid ",
        }}
      >
        <MDBContainer
          style={{ color: "white", backgroundColor: "rgb(193, 172, 135)" }}
          fluid
        >
          &copy; {new Date().getFullYear()}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
