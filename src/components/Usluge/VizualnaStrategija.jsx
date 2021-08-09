import React from "react";
import "./usluge.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Footer from "../Nav/Footer";

function VizualnaStrategija() {
  return (
    <div style={{ marginTop: "7rem", background: "white" }}>
      <hr style={{ width: "50%", display: "flex", margin: "0 auto" }} />
      <h1 className="vizualni-naslov">Vizaulna startegija</h1>
      <p className="vizualni-tekst">
        Poznato je kako je Instagram vizualna platforma na kojoj sadržajem
        privlačiš, a opisom budiš emociju i stvaraš poveznicu sa svojom
        zajednicom! Vizualna strategija sastoji se od definirane palete boja
        tvog profila, vizualnog prijedloga 9 objava sa filterom, kreiranja
        naglasaka, kratkog vodiča koji će ti pomoći staviti fokus na sadržaj
        koji će kod tvoje zajednice probuditi reakcije, a pritom ti skrenuti
        pažnju na detalje te template‑ova za tvoje društvene mreže, Reels i IG
        story koje možeš prilagođavati svojim željama! Nakon vizualne strategije
        imati ćeš sliku s čim točno krenuti te u kojem smjeru bi tvoj sadržaj
        ‘trebao’ ići.
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
              src="https://laurelicornerco.files.wordpress.com/2021/05/1-1.png?w=768"
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
            <h3>Estetski privlačna rješenja</h3>
            <p>
              Vizualna strategija obuhvaća sve tvoje želje, resurse
              (fotografije) i srž branda. Obuhvaćamo navedene stavke i kreiramo
              vizualni prijedlog feed-a sa smislenim rasporedom kako bi se
              kasnije mogao jednostavno pratiti. Kreiramo i prijedlog vizuala te
              filter kojeg možeš koristiti na svim svojim fotkicama.
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
            <h3>Template-ovi i vision board</h3>
            <p>
              Osim što ćemo tvom profilu dati potpuno novi imidž, kreiramo i
              template-ove za objave, carousel objave, Reels, IGTV, story objave
              i što ti je god dodatno potrebno. Template-ovi su u potpunosti
              prilagodljivi pa uvijek možeš promijeniti korištene fotografije,
              boju ili font, a sve u svrhu dugotrajnog rješenja. Vision board je
              tu kako bi ti pomogao kreirati nove fotografije i sadržaj, ali te
              i inspirirao!
            </p>
          </MDBCol>
          <MDBCol lg="6">
            <img
              src="https://laurelicornerco.files.wordpress.com/2021/05/4.png?w=768"
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
              src=" https://laurelicornerco.files.wordpress.com/2021/05/14.png?w=768"
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
            <h3>Detaljna</h3>
            <p>
              Kao i brand strategija, vizualnu strategiju upotpunjavamo
              detaljnim objašnjenjima prijedloga, osnovne ideje koja se krije
              iza svakog rasporeda fotografija, kreiranih template-ova te
              odabranih vizuala naglasaka. Sve pišemo kako bi se što
              jednostavnije i bolje shvatila poanta strategije.
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

export default VizualnaStrategija;
