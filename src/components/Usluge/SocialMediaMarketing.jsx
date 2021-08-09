import React from "react";
import "./usluge.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Footer from "../Nav/Footer";

function SocialMediaMarketing() {
  return (
    <div style={{ marginTop: "7rem", background: "white" }}>
      <hr style={{ width: "50%", display: "flex", margin: "0 auto" }} />
      <h1 className="vizualni-naslov">SOCIAL MEDIA MARKETING</h1>
      <p className="vizualni-tekst">
        Što kada bih ti rekla kako je priča koju pričaš važnija od bilo kakve
        marketinške aktivnosti? Social media marketing uključuje nekoliko naših
        “core” usluga koje se tiču definiranja strategije komunikacije na
        društvenim mrežama, kreiranja cjelokupne vizualne strategije, hashtag
        strategije te content marketinga. Kako to izgleda kod nekih od naših
        klijenata, pogledaj klikom na fotografije!
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
              src="https://laurelicornerco.files.wordpress.com/2021/05/img-6098.jpg"
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
            <h3>Individualni pristup i posvećenost</h3>
            <p>
              Ključna stavka našeg poslovanja je kvaliteta, zbog čega imamo
              limitarni broj brandova sa kojima surađujemo na social media
              marketingu, a kojima nudimo punu uslugu konzultacija, kreiranja
              marketinških kampanja, režiranja/fotografiranja, kreiranja
              vizualne i hashtag strategije te cjelokupnog contenta!
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
            <h3>Pronađi sve na jednom mjestu</h3>
            <p>
              S obzirom na činjenicu kako kreiramo content za tvoj brand,
              najbolje znamo na što će zajednica reagirati. Iz tog razloga
              nudimo ti, osim kreiranja sadržaja, i kreaciju oglasa,
              fotografiranje ili režiranje (neke od primjera možeš i vidjeti) te
              kreiranje marketinških kampanja. Dolazimo sami sa razrađenim
              prijedlogom kampanje, a s tobom radimo na zajedničkom brandiranju.
              Tvoje mišljenje i ideje su nam jako važne pa tako nakon
              isporučenih prijedloga, zajedno dolazimo do najboljeg rješenja!
            </p>
          </MDBCol>
          <MDBCol lg="6">
            <img
              src="https://laurelicornerco.files.wordpress.com/2021/05/5e0078d2-a9f1-4a7b-8064-418b70d93428.jpg"
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
              src="https://laurelicornerco.files.wordpress.com/2021/05/dsc_5936.jpg?w=768"
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
            <h3>Bez prevare!</h3>
            <p>
              Cilj nam je generirati kvalitetne rezultate zbog čega radimo samo
              sa provjerenim i odobrenim programima, ne koristimo robote niti
              kupujemo pratitelje. Radimo na organskom dosegu, uz kombinaciju sa
              plaćenim sadržajem te marketinškim kampanjama koje mogu
              uključivati influencere. Zajedno s tobom dogovaramo tijek i plan
              rada.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div
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

export default SocialMediaMarketing;
