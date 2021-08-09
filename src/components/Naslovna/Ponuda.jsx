import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
function Ponuda() {
  return (
    <div style={{ backgroundColor: "rgba(150,110,50,0.4)", padding: "5rem" }}>
      <h1
        style={{
          display: "flex",
          marginBottom: "2rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontFamily: "Roboto",
          fontWeight: "300",
          fontStyle: "normal",
          fontSize: "xxx-large",
          justifyContent: "center",
        }}
      >
        USLUGE
      </h1>
      <hr />
      <MDBContainer>
        <MDBRow>
          <MDBCol
            md="8"
            className="mb-3"
            style={{
              marginTop: "2rem",
              height: "28rem",
              margin: "0 auto",
            }}
          >
            <div className="info">
              <h3
                style={{
                  letterSpacing: "0.2em",
                  marginBottom: "3rem",
                  fontFamily: "Roboto",
                  fontWeight: "300",
                  fontStyle: "normal",
                  fontSize: "larger",
                  marginTop: "6rem",
                  display: "flex",
                  justifyContent: "center",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                Brand ili vizualna strategija
              </h3>
              <p
                style={{
                  letterSpacing: "0.1em",
                  marginBottom: "2rem",
                  fontFamily: "Roboto",
                  fontWeight: "300",
                  fontStyle: "normal",
                  fontSize: "normal",
                  marginTop: "3rem",
                  display: "flex",
                  justifyContent: "center",
                  width: "70%",
                  alignItems: "center",
                  margin: "auto",
                }}
              >
                Brand i vizualna strategija naše su najpopularnije usluge, a
                uključuju detaljnu analizu i obradu prisutnosti tvog branda na
                društvenim mrežama. Klikni i saznaj više!
              </p>
              <div
                className="options"
                style={{
                  display: "flex",
                  marginTop: "1rem",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    margin: "1rem",
                    backgroundColor: "rgba(152,115,76,0.8)",
                  }}
                >
                  <Link to="/brand-strategija" style={{ color: "white" }}>
                    <h5
                      style={{
                        letterSpacing: "0.2em",
                        marginBottom: "0rem",

                        fontFamily: "Roboto",
                        fontWeight: "300",
                        fontStyle: "normal",
                        fontSize: "small",
                      }}
                    >
                      Brand strategija
                    </h5>
                  </Link>
                </Button>
                <Button
                  variant="contained"
                  style={{
                    margin: "1rem",
                    backgroundColor: "rgba(152,115,76,0.8)",
                  }}
                >
                  <Link to="/vizualna-strategija" style={{ color: "white" }}>
                    <h5
                      style={{
                        letterSpacing: "0.2em",
                        marginBottom: "0rem",
                        fontFamily: "Roboto",
                        fontWeight: "300",
                        fontStyle: "normal",
                        fontSize: "small",
                      }}
                    >
                      Vizualna strategija
                    </h5>
                  </Link>
                </Button>
              </div>
            </div>
          </MDBCol>
          <MDBCol
            md="4"
            style={{
              backgroundColor: "white",
              padding: "0",
              height: "28rem",
              margin: "0 auto",
            }}
          >
            <img
              src="https://laurelicornerco.files.wordpress.com/2021/05/9d60cd86-995e-497e-8b04-c6da58884f0e.png?w=768"
              className="img-fluid "
              style={{
                objectFit: "cover",
                height: "28rem",
                width: "inherit",
                //  padding: "1rem",
                //background: "rgba(152, 115, 76, 0.8)",
              }}
              alt=""
            />
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow style={{ marginTop: "2rem" }}>
          <MDBCol
            className="mb-3"
            md="4"
            style={{
              backgroundColor: "white",
              padding: "0",
              height: "28rem",
              margin: "0 auto",
            }}
          >
            <img
              src="https://laurelicornerco.files.wordpress.com/2021/05/6601149e-1abb-4aad-b46e-5df9da13a5a8.png?w=768"
              className="img-fluid "
              style={{
                objectFit: "cover",
                height: "28rem",
                width: "inherit",
                //  padding: "1rem",
                //background: "rgba(152, 115, 76, 0.8)",
              }}
              alt=""
            />
          </MDBCol>

          <MDBCol
            md="8"
            style={{
              marginTop: "2rem",
              height: "28rem",
              margin: "0 auto",
            }}
          >
            <div className="info">
              <h3
                style={{
                  marginTop: "5rem",
                  display: "flex",
                  justifyContent: "center",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  marginBottom: "3rem",
                  fontFamily: "Roboto",
                  fontWeight: "300",
                  fontStyle: "normal",
                  fontSize: "larger",
                  textAlign: "center",
                }}
              >
                Konzultacije ili social media marketing
              </h3>
              <p
                style={{
                  letterSpacing: "0.1em",
                  marginBottom: "2rem",
                  fontFamily: "Roboto",
                  fontWeight: "300",
                  fontStyle: "normal",
                  fontSize: "normal",
                  marginTop: "3rem",
                  display: "flex",
                  justifyContent: "center",
                  width: "70%",
                  alignItems: "center",

                  margin: "auto",
                }}
              >
                Konzultacijski sastanak na kojem detaljno analiziramo tvoje
                društvene mreže, kreiramo prijedloge i iznosimo rješenja, ili
                profesionalno vođenje društvenih mreža tvog branda? Klikni i
                saznaj više!
              </p>
              <div
                className="options"
                style={{
                  display: "flex",
                  marginTop: "1rem",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    margin: "1rem",
                    backgroundColor: "rgba(152,115,76,0.8)",
                  }}
                >
                  <Link to="/konzultacije" style={{ color: "white" }}>
                    <h5
                      style={{
                        letterSpacing: "0.2em",
                        marginBottom: "0rem",

                        fontFamily: "Roboto",
                        fontWeight: "300",
                        fontStyle: "normal",
                        fontSize: "small",
                      }}
                    >
                      Konzultacije
                    </h5>
                  </Link>
                </Button>
                <Button
                  variant="contained"
                  style={{
                    margin: "1rem",
                    backgroundColor: "rgba(152,115,76,0.8)",
                  }}
                >
                  <Link to="/social-media-marketing" style={{ color: "white" }}>
                    <h5
                      style={{
                        letterSpacing: "0.2em",
                        marginBottom: "0rem",
                        fontFamily: "Roboto",
                        fontWeight: "300",
                        fontStyle: "normal",
                        fontSize: "small",
                      }}
                    >
                      Social media marketing
                    </h5>
                  </Link>
                </Button>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Ponuda;
