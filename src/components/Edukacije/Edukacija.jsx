import React, { useState } from "react";
import "./edukacija.css";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBIcon } from "mdbreact";
import Footer from "../Nav/Footer";
import emailjs from "emailjs-com";
import Button from "@material-ui/core/Button";

function Edukacija() {
  const [enteredText, setEnteredText] = useState("");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6j5752c",
        "laureli-edukacija",
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
        paddingTop: "7rem",
        background: "rgba(150, 110, 50, 0.2)",
      }}
    >
      <h1 className="vizualni-naslov">Edukacije</h1>
      <hr
        style={{
          backgroundColor: "rgba(152, 115, 76, 0.8)",
          width: "70%",
          display: "flex",

          margin: "auto",
        }}
      />
      <div>
        <div className="edukacijeNaslov">
          <h3>Vizualna strategija</h3>
          <h6>By Laureli Corner</h6>
        </div>
      </div>

      <MDBContainer
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <MDBRow
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <MDBCol xl="6" style={{ marginBottom: "1rem" }}>
            <img
              src="https://laurelicornerco.files.wordpress.com/2021/06/5.png?w=768"
              alt=""
              style={{
                width: "500px",
                height: "900px",
                objectFit: "cover",
                display: "flex",
                margin: "0 auto",
                //  padding: "1rem",
                background: "rgba(152, 115, 76, 0.8)",
              }}
            />
          </MDBCol>
          <MDBCol
            style={{
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h3>Teorijski + praktični dio</h3>
            <div
              style={{
                display: "flex",
                margin: "0 auto",
                alignItems: "center",
                color: "darkgray",
              }}
            >
              <hr
                width="1"
                style={{
                  borderLeft: "0.5px solid rgba(152, 115, 76, 0.8)",
                  height: "2rem",
                  marginRight: "0.5rem",
                }}
              />
              <h4
                style={{
                  margin: "0",
                  fontStyle: "italic",
                  fontSize: "inherit",
                  color: "rgba(152, 115, 76, 0.8)",
                }}
              >
                Teorijski dio (1h)
              </h4>
            </div>

            <p className="tekst">
              Na novoj edukaciji ‘Vizualna strategija’ pričamo o sadržaju za
              društvene mreže. Detaljno definiramo kako kreirati objave unutar
              kojih prolazimo segment vizuala/carousel objava te videozapisa.
              Slijede nam priče pri čemu objašnjavamo kako kreirati template-ove
              za iste, odabrati boje i komunicirati ponudu usluga/proizvoda.
              Nadalje, pričamo o Reels-u te pokazujemo kako kreirati naslovnu i
              završnju stranicu, pokazujemo trikove za dobar Reels video, dajemo
              niz primjera za vaš brand te definiramo kako komunicirati prodaju
              putem istog. Naposljetku, prikazujemo dobre i loše primjere svega
              navedenog te dajemo popis korisnih aplikacija za svaki dio
              zasebno, uz objašnjenja. Teorijski dio radionice zaključujemo
              pričom o definiranju rasporeda za feed, objašnjavamo sve dostupne
              opcije te na primjeru objašnjavamo kako kreirati vlastiti filter
              za fotografije.
            </p>
            <div
              style={{
                display: "flex",
                margin: "0 auto",
                alignItems: "center",
                color: "darkgray",
              }}
            >
              <hr
                width="1"
                style={{
                  borderLeft: "0.5px solid  rgba(152, 115, 76, 0.8) ",
                  height: "2rem",
                  marginRight: "0.5rem",
                }}
              />
              <h4
                style={{
                  margin: "0",
                  fontStyle: "italic",
                  fontSize: "inherit",
                  color: "rgba(152, 115, 76, 0.8)",
                }}
              >
                Praktični dio (45min)
              </h4>
            </div>
            <p className="tekst">
              U praktičnom dijelu radionice, temeljem svih dobivenih saznanja,
              imati ćete priliku sami kreirati vlastitu objavu i story. Kreaciji
              prethodi kratki vodič kroz Canvu unutar koje će se raditi. Canva
              će biti svima omogućena
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <h1 style={{ display: "flex", margin: "0 auto", padding: "2rem" }}>
            INDIVIDUALNI PRISTUP
          </h1>
          <p className="tekst" style={{ textAlign: "center" }}>
            Posebnost radionice je u tome da se potpuno prilagođava vašem brandu
            tako da prilikom rezervacije mjesta navodite čime se točno bavite
            (npr. beauty industrija/ travel / sport) kako bi mi mogli kreirati
            relevantne primjere za svaku od navedenih industrija i ponuditi vam
            kreativna i primjenjiva rješenja.
          </p>
          <MDBCol xl="6">
            <img
              src="https://laurelicornerco.files.wordpress.com/2021/06/146be7ee-f250-47fa-a080-7537f769ea56-1.png?w=768"
              alt=""
              style={{
                width: "340px",
                height: "460px",
                objectFit: "cover",
                display: "flex",
                margin: "0 auto",
                //padding: "1rem",
                background: "rgba(152, 115, 76, 0.8)",
              }}
            />
          </MDBCol>
          <MDBCol>
            <div
              className="edukacijeNaslov"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {/*} <h2
                style={{
                  marginTop: "4rem",
                  fontSize: "larger",
                  fontWeight: "400",
                }}
              >
                Rezerviraj svoje mjesto do 20.7. i ostvari 20% popusta!
              </h2>
              <h3
                style={{
                  fontSize: "xl-large",
                  padding: "1rem",
                  textDecoration: "line-through",
                }}
              >
                500kn
              </h3>*/}
              <h6
                className="tekst"
                style={{
                  textTransform: "none",
                  padding: "0",
                  fontSize: "larger",
                }}
              >
                Cijena rezervacije :
              </h6>
              <h3 style={{ fontSize: "xxl-large", paddingBottom: "1rem" }}>
                500kn
              </h3>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer
        style={{
          padding: "2rem",
          backgroundColor: "beige",
          borderTop: "1px solid rgba(152, 115, 76, 0.8)",
          borderBottom: "1px solid rgba(152, 115, 76, 0.8)",
        }}
      >
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
              Rezerviraj svoje mjesto!
            </p>
            <div
              style={{
                width: "50%",
                margin: "auto",
                color: "rgba(152, 115, 76, 0.8)",
              }}
            >
              <MDBInput
                name="ime"
                label="Ime i prezime (obavezno)"
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
                label="Upiši email adresu (obavezno)"
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
                Rezerviraj
                <MDBIcon far icon="paper-plane" className="ml-1" />
              </Button>
            </div>
          </form>
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

export default Edukacija;
