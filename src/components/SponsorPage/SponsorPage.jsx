import React from "react";
import NavPage from "../Navbar/Navbar";
import "./SponsorPage.css";

import OhanaCo from "./images/Ohana & Co Logo.png";
import GeneHaas from "./images/Haas White.png";
import Enterprs from "./images/Enterprise Logo.png";
import Industry from "./images/Industrious Logo.png";
import Intuitive from "./images/Intuitive Logo.png";
import BHEF from "./images/BHEF Logo.png"

import Footer from "../Footer/Footer";
import { Container, Row } from "react-bootstrap";
// i will find a way to not use this function btw im just lazy rn
function redirect(link) {
  window.location.href = link;
}

const SponsorPage = () => {
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
              <img src={GeneHaas} alt="Gene Haas Foundation" className="sp-img hoverable" onClick={redirect("https://ghaasfoundation.org/content/ghf/en/home.html")}/>
              <img src={OhanaCo} alt="Ohana & Co"  className="sp-img hoverable" onClick={redirect("https://www.ohanaco.com/")}/>
              
              <img src={BHEF} alt="BHEF"  className="sp-img-long hoverable" onClick={redirect("https://www.bhef.org/")}/>
              <img src={Industry} alt="The Industrious"  className="sp-img-long hoverable" onClick={redirect("")}/>
              
              <img src={Enterprs} alt="Enterprise Rent A Car"  className="sp-img-long hoverable" onClick={redirect("https://www.enterprise.com/en/home.html")}/>
              <img src={Intuitive} alt="Intuitive"  className="sp-img hoverable" onClick={redirect("https://www.intuitive-foundation.org/")}/>
            </Row>
          </Container>
      </div>
      <Footer />
    </div>
  );
};

export default SponsorPage;
