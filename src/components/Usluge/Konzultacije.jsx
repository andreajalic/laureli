import React from "react";
import "./usluge.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Footer from "../Nav/Footer";

function Konzultacije() {
  return (
    <div style={{ marginTop: "7rem", background: "white" }}>
      <hr style={{ width: "50%", display: "flex", margin: "0 auto" }} />
      <h1 className="vizualni-naslov">Konzultacije</h1>
      <p className="vizualni-tekst">
        Savjetovanja u trajanju od sat vremena ili duže unutar kojih prolazimo
        temu vizualne strategije tvog profila, komunikacije i upravljanja
        društvenim mrežama. Nakon navedenog, dajemo detaljne prijedloge za
        poboljšanja!
      </p>

      <MDBContainer
        style={{
          paddingTop: "2rem",
        }}
      >
        <MDBRow
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <MDBCol lg="6">
            <img
              src="https://laurelicornerco.files.wordpress.com/2021/05/img-7296.jpg"
              alt=""
              style={{
                width: "470px",
                height: "470px",
                objectFit: "cover",
                display: "flex",
                margin: "0 auto",
              }}
            />
          </MDBCol>
          <MDBCol
            lg="6"
            style={{
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3>Let’s go online!</h3>
            <p>
              Konzultacije se održavaju online, u terminu po dogovoru. Trajanje
              također dogovaramo, a slijed konzultacija ovisi o tvojim
              potrebama, pitanjima i željama.
            </p>
          </MDBCol>
        </MDBRow>

        <MDBRow
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <MDBCol
            lg="6"
            style={{
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3>IG feed, priče, strategija, hashtag-ovi…</h3>
            <p>
              Nije važno jesi li u procesu pokretanja društvenih mreža za svoj
              brand ili želiš poboljšati postojeće. Konzultacije pokrivaju
              vizualnu strategiju za tvoj IG profil – odabir boja i fonta,
              kreaciju vizuala, slaganje objava te filter, strategiju
              komunikacije koja bi ti najviše odgovarala, kreaciju priča te
              odabir hashtag-ova i kreaciju hashtag skupina. Osim konzultacija,
              kod nas možeš pronaći i tematske grupne online radionice, a za
              više informacija o navedenom, kontaktiraj nas putem mail-a!
            </p>
          </MDBCol>
          <MDBCol lg="6">
            <img
              src="https://laurelicornerco.files.wordpress.com/2021/05/img-9149.jpg"
              alt=""
              style={{
                width: "470px",
                height: "470px",
                objectFit: "cover",
                display: "flex",
                margin: "0 auto",
              }}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
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
            {" "}
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
              Social Media Marketing
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
      <hr />
      <Footer />
    </div>
  );
}

export default Konzultacije;
