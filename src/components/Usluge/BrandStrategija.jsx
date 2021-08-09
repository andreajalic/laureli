import React from "react";
import "./usluge.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Footer from "../Nav/Footer";

function BrandStrategija() {
  return (
    <div style={{ marginTop: "7rem", background: "white" }}>
      <hr style={{ width: "50%", display: "flex", margin: "0 auto" }} />
      <h1 className="vizualni-naslov">Brand startegija</h1>
      <p className="vizualni-tekst">
        Jedinstveni pdf priručnik unutar kojeg možeš pronaći cijeli know‑how za
        vođenje svojih društvenih mreža. Pokriva niz tema među kojima su:
        dosezanje ciljane klijentele, vizualna strategija, komunikacija i
        storytelling preko društvenih mreža, hashtag strategija, kratki vodič
        kroz Reels, kreiranje naglasaka i priča, popis korisnih aplikacija,
        vodič kroz kreiranje oglasa te komunikaciju na Facebook‑u.
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
              src="https://laurelicornerco.files.wordpress.com/2021/05/2821a236-4a18-4d75-9cd9-7e5784dc3a34.png?w=768"
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
            <h3>Detaljna i individualno kreirana</h3>
            <p>
              Jedna od glavnih karakteristika brand strategije jest činjenica da
              se kreira individualno, odnosno, obrađujemo stavke koje su ti
              potrebne. Također, niti jedna izjava upotrijebljena u strategiji
              neće ostati nerazjašnjena, već će biti potkrijepljena primjerom.
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
            <h3>Prepuna vizualnih prijedloga</h3>
            <p>
              Jedna od stvari na koju posebno pazimo i kojoj pridajemo veliku
              važnost, zasigurno je vizualna strategija. Društvene mreže
              produžena su ruka cjelokupnog poslovanja, a estetika i
              prezentacija tvog branda potencijalnim klijentima od iznimnog su
              značaja. Kreiramo vizualni prijedlog Instagram feed-a, vision
              board, predloške za komunikaciju putem društvenih mreža te
              definiramo paletu boja.
            </p>
          </MDBCol>
          <MDBCol lg="6">
            <img
              src="https://laurelicornerco.files.wordpress.com/2021/05/3-1.png?w=768"
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
        <MDBRow
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <MDBCol lg="6">
            <img
              src=" https://laurelicornerco.files.wordpress.com/2021/05/ab8aa886-5e85-446d-8cf5-e9830eed7061.png?w=768"
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
            <h3>Ažurna i jednostavna</h3>
            <p>
              Ovisno o novim trendovima u svijetu društvenih mreža, brand
              strategija uvijek uključuje prijedloge vezane uz navedeno. Osim
              što uključuje prijedloge sa razrađenim idejama, sadrži i upute za
              ispravnu implementaciju prijedloga kako bi se točno znalo što
              napraviti nakon čitanja.
            </p>
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
          <Link to="/vizualna-strategija" style={{ color: "white" }}>
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
              vizualna strategija
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
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default BrandStrategija;
