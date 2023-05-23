import React from "react";
import NavPage from "../Navbar/Navbar";
import "./SponsorPage.css";

import OhanaCo from "./images/Ohana & Co Logo.png";
import GeneHaas from "./images/Haas White.png";
import Enterprs from "./images/Enterprise Logo.png";
import BHEF from "./images/BHEF Logo.png";

import Footer from "../Footer/Footer";
import { Container, Row } from "react-bootstrap";

const SponsorPage = () => {
  const handleRedirect = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div>
      <div className="black">
        <NavPage />
        <div className="bg-sponsors header">
          <h1 className="sptext">
            SPONSORS
            <h1 className="sptext-sub">THANK YOU FOR SUPPORTING OUR TEAM</h1>
          </h1>
        </div>
        <Container>
          <Row>
            <img
              src={GeneHaas}
              alt="Gene Haas Foundation"
              className="sp-img hoverable"
              onClick={() =>
                handleRedirect("https://ghaasfoundation.org/content/ghf/en/home.html")
              }
            />
            <img
              src={OhanaCo}
              alt="Ohana & Co"
              className="sp-img hoverable"
              onClick={() => handleRedirect("https://www.ohanaco.com/")}
            />

            <img
              src={BHEF}
              alt="BHEF"
              className="sp-img-long hoverable"
              onClick={() => handleRedirect("https://www.bhef.org/")}
            />
            <img
              src={Enterprs}
              alt="Enterprise Rent A Car"
              className="sp-img-long hoverable"
              onClick={() =>
                handleRedirect("https://www.enterprise.com/en/home.html")
              }
            />
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default SponsorPage;
