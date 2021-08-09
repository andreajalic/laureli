import React from "react";
import "./usluge.css";

import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Footer from "../Nav/Footer";
function Usluge() {
  return (
    <div
      style={{
        background: "rgba(150, 110, 50, 0.4)",
      }}
    >
      <h3 className="usluge" style={{ textAlign: "center" }}>
        Unaprijedi svoje poslovanje
      </h3>
      <hr style={{ margin: "2rem" }} />
      <MDBContainer style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <MDBRow>
          <MDBCol size="4" style={{ padding: "0", margin: "0" }}>
            <img
              style={{
                objectFit: "cover",
                height: "200px",
                width: "inherit",
              }}
              alt=""
              src="https://mail.google.com/mail/u/0?ui=2&ik=ba7d068381&attid=0.7&permmsgid=msg-f:1687138508043375037&th=1769eb88c2ced1bd&view=att&disp=inline&realattid=d00de8aadf281fa3_0.7"
            />
          </MDBCol>
          <MDBCol size="4" style={{ padding: "0", margin: "0" }}>
            <img
              style={{
                objectFit: "cover",
                height: "200px",
                width: "inherit",
              }}
              alt=""
              src="https://mail.google.com/mail/u/0?ui=2&ik=ba7d068381&attid=0.1&permmsgid=msg-f:1687138697731274259&th=1769ebb4ed167613&view=att&disp=safe&realattid=5320acf61ba64c35_0.1"
            />
          </MDBCol>
          <MDBCol size="4" style={{ padding: "0", margin: "0" }}>
            <img
              style={{
                objectFit: "cover",
                height: "200px",
                width: "inherit",
              }}
              alt=""
              src="https://mail.google.com/mail/u/0?ui=2&ik=ba7d068381&attid=0.13&permmsgid=msg-f:1687138508043375037&th=1769eb88c2ced1bd&view=att&disp=safe&realattid=d00de8aadf281fa3_0.13"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />

      <MDBContainer style={{ marginTop: "1rem" }}>
        <MDBRow className="row-usluge">
          <MDBCol
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid",
              background: "beige",
            }}
          >
            <Link to="/vizualna-strategija">
              <img
                src="https://laurelicornerco.files.wordpress.com/2021/05/8ea668ef-64d9-4e85-bc66-aa6abe375e7f-1-edited.png"
                alt=""
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </Link>

            <h3
              style={{
                letterSpacing: "0.2em",
                marginBottom: "0rem",
                textTransform: "uppercase",
                fontFamily: "Roboto",
                fontWeight: "300",
                fontStyle: "normal",
                fontSize: "larger",
                display: "flex",
              }}
            >
              <Link to="/vizualna-strategija" style={{ color: "black" }}>
                {" "}
                VIZUALNA STRATEGIJA
              </Link>
            </h3>
            <hr
              style={{
                width: "50%",
                textAlign: "left",
                marginLeft: "0",
              }}
            />
            <p>
              <Link to="/vizualna-strategija" style={{ color: "black" }}>
                {" "}
                Paleta boja, template-ovi, filteri, naglasci i mnoštvo dodatnih
                usluga pobrinuti će se za estetiku tvog profila!
              </Link>
            </p>
          </MDBCol>

          <MDBCol
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid",
              background: "rgba(152, 115, 76, 0.8)",
            }}
          >
            <Link to="/brand-strategija">
              <img
                src="https://laurelicornerco.files.wordpress.com/2021/05/c5e158f7-4071-4811-9a82-f7693b87c71d-edited.png"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                }}
                alt=""
              />
            </Link>
            <h3
              style={{
                letterSpacing: "0.2em",
                marginBottom: "0rem",
                textTransform: "uppercase",
                fontFamily: "Roboto",
                fontWeight: "300",
                fontStyle: "normal",
                fontSize: "larger",
                display: "flex",
              }}
            >
              <Link to="/brand-strategija" style={{ color: "white" }}>
                BRAND STRATEGIJA
              </Link>
            </h3>
            <hr
              style={{
                width: "50%",
                textAlign: "left",
                marginLeft: "0",
              }}
            />
            <p>
              <Link to="/brand-strategija" style={{ color: "white" }}>
                Cjelokupni know-how poslovanja preko društvenih mreža upotpunjen
                detaljnim primjerima i razradom.
              </Link>
            </p>
          </MDBCol>
        </MDBRow>
        <hr style={{ marginTop: "5rem", marginBottom: "5rem" }} />
        <MDBRow className="row-usluge" style={{ paddingBottom: "2rem" }}>
          <MDBCol
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid",
              background: "rgba(152, 115, 76, 0.8)",
            }}
          >
            <Link to="/social-media-marketing" style={{ color: "white" }}>
              <img
                src="https://laurelicornerco.files.wordpress.com/2021/05/ff17c150-4904-4671-b0cf-92cc22d21b17-edited-1.png"
                style={{
                  width: "19rem",
                  objectFit: "cover",
                }}
                alt=""
              />
            </Link>
            <h3
              style={{
                letterSpacing: "0.2em",
                marginBottom: "0rem",
                textTransform: "uppercase",
                fontFamily: "Roboto",
                fontWeight: "300",
                fontStyle: "normal",
                fontSize: "larger",
                display: "flex",
              }}
            >
              <Link to="/social-media-marketing" style={{ color: "white" }}>
                SOCIAL MEDIA MARKETING
              </Link>
            </h3>
            <hr
              style={{
                width: "50%",
                textAlign: "left",
                marginLeft: "0",
              }}
            />
            <p>
              <Link to="/social-media-marketing" style={{ color: "white" }}>
                Preuzimamo tvoje društvene mreže, kreiramo marketinške kampanje
                i content!/
              </Link>
            </p>
          </MDBCol>
          <MDBCol
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid",
              background: "beige",
            }}
          >
            <Link to="/konzultacije" style={{ color: "black" }}>
              <img
                src="https://laurelicornerco.files.wordpress.com/2021/05/66c13516-bbaf-4ae1-a3d4-7e934ecb18b5-edited-1.png"
                alt=""
                style={{
                  width: "19rem",
                  objectFit: "cover",
                }}
              />
            </Link>
            <h3
              style={{
                letterSpacing: "0.2em",
                marginBottom: "0rem",
                textTransform: "uppercase",
                fontFamily: "Roboto",
                fontWeight: "300",
                fontStyle: "normal",
                fontSize: "larger",
                display: "flex",
              }}
            >
              <Link to="/konzultacije" style={{ color: "black" }}>
                KONZULTACIJE
              </Link>
            </h3>
            <hr
              style={{
                width: "50%",
                textAlign: "left",
                marginLeft: "0",
              }}
            />
            <p>
              <Link to="/konzultacije" style={{ color: "black" }}>
                {" "}
                Online sastanak unutar kojeg kreiramo detaljne prijedloge za
                unaprjeđenje komunikacije i vizualne strategije ili kreiranje
                društvenih mreža za tvoj brand.
              </Link>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div
        style={{
          background: "white",
          display: "grid",
          paddingBottom: "3rem",
          marginTop: "1rem",
        }}
      >
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            textTransform: "uppercase",
            alignContent: "center",
            alignItems: "center",
            letterSpacing: "0.2em",
            marginBottom: "3rem",
            fontFamily: "Roboto",
            fontWeight: "300",
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

export default Usluge;
