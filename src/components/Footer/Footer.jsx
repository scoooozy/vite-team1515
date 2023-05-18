import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Footer/Footer.css";

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer(props) {
  return (
    <footer className="footer">
      <Container className="footer-container">
        {props.children ? (
          <Row className="footer-row">
            <Col className="text-center padd">{props.children}</Col>
          </Row>
        ) : (
          <></>
        )}
        <Row className="footer-row">
          <Col className="footer-info">
            <a href="https://www.instagram.com/frc1515/?hl=en"><InstagramIcon/></a>
            <a href="https://www.facebook.com/frc1515/"><FacebookIcon/></a>
            <a href="https://twitter.com/frc1515?lang=en"><TwitterIcon/></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
