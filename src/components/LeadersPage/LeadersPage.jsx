import React from "react";
import "./LeadersPage.css";
import NavPage from "../Navbar/Navbar";
import Header from "../Header/Header";
import PersonCard from "../PersonCard/PersonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gad from "./assets/gad.webp";
import hay from "./assets/hay.webp";
import jus from "./assets/jus.webp";
import kay from "./assets/kay.webp";
import ode from "./assets/ode.webp";
import rac from "./assets/rac.webp";
import ari from "./assets/ari.webp";
import mat from "./assets/mat.webp";
import yur from "./assets/yur.webp";

import Castle from "./assets/castle.webp";
import LeadersBG from "./leadership.webp";
import Footer from "../Footer/Footer";
import { useRef } from "react";
const LeadersPage = (props) => {
  const ref = useRef(null);
  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <NavPage />
      <Header wText="OUR " oText="LEADERS" min="800" bg={LeadersBG}>
        <button className="scroll-btn" onClick={handleScroll}>
          Scroll Down
        </button>
      </Header>
      <Container className="person-card-container">
        <Row>
          <PersonCard
            ref={ref}
            bg={ode}
            name="Odelia Shofet"
            position="President"
            description="I am a current senior and have been on this team for the past four years. As machine specialist, I oversee the woodshop and teach new members about the machinery. From freshman year, I have loved everything mechanical and machinery. Being on MorTorq, I have learned a variety of skills, from using SolidWorks to leading a group of students. I look forward to the rest of the year and next year on this team! Go MorTorq!"
          />
          <PersonCard
            bg={kay}
            name="Kaylen Wi"
            position="President"
            description="This is my fourth year on the team. As electrical specialist, I wire the robot to ensure Build can run the different components they built with the code Programers wrote. Electrical piqued my interest freshman year and since then I worked very hard to increase my knowledge. Mortorq has given me many opportunities from learning how to use power tools to developing my engineering and leadership skills. I have met so many amazing people through this program and hope to encourage more girls to join FIRST."
          />{" "}
          <PersonCard
            bg={rac}
            name="Rachel Cohen"
            position="CAD Specialist"
            description="This is my fourth year with Team 1515. As CAD Specialist, I teach students about Computer Aided Design (CAD) and help them develop their skillson the Solidworks program. Thanks to the Robotics Program, I have developed skills in engineering, machinery, design, and leadership. I hope to continue teaching and encouraging more females, as well as many of those in the Arts departments, to join Robotics."
          />{" "}
        </Row>
        <Row>
          <PersonCard
            bg={hay}
            name="Hayley Chechel"
            position="Programing Specialist"
            description="I'm the head of programming on team 1515. My job is to program the robot to complete various challenges and help train the next generation of programmers. As a junior, this is my 3rd year on this incredible team. Mortorq has taught me so much about coding and leadership and I'm so excited to help pass the knowledge down. This team has helped prepare me for real life challenges I'll see as a CS major and I'm so grateful for the experiences and lessons I've learned. I'm looking forward to another amazing year. Go Mortorq!"
          />
          <PersonCard
            bg={yur}
            name="Yury Hasson"
            position="Electrical Specialist"
            description="Hello, My name Is Yury, I am a junior in Highschool, and I have been on the team for 3 years.  This year I was promoted to electrical specialist, my job on the team is to wire the robot and make sure everything on the robot is wired correctly. I became an electrical specialist because my dad inspired me by teaching me many of the basics of wiring and I fell in love with it. Now with me being the electrical specialist of MorTorq and having great mentors I can pursue my knowledge in electronics and possibly pursue a career in electronics.
            "
          />{" "}
          <PersonCard
            bg={ari}
            name="Arielle Efron"
            position="Safety Capitan"
            description="I am a junior and this is my third year as the Safety Captain of our robotics team. Safety is an absolute necessity and priority for us, and I hope to share my passion for safety beyond just MorTorq and with anyone interested in educating themselves on how to further protect their team!"
          />{" "}
        </Row>
        <Row>
          <PersonCard
            bg={jus}
            name="Justin Perlman"
            position="Build Specialist"
            description="This is my 4th year at Mortorq and taking part in FRC! For the past few years, I’ve been the team’s driver. This year I’m the Build Specialist! It's my duty to teach engineering to our new members, make sure our robot is designed and built with high quality, and keep our build subgroups operating cohesively together! I absolutely love being a part of this team. Everybody has such a positive, inclusive attitude and I couldn't feel more at home. I can't wait to see what we create next! Go Mortorq!"
          />{" "}
          <PersonCard
            bg={gad}
            name="Gaddiel Noveck"
            position="Machine Specialist"
            description="Hey, my name is Gaddiel Noveck and I'm the Machine Specialist! As a senior, I've spent three years with MorTorq, building robots and forming friendships along the way. It's my responsibility to share my knowledge of the workshop with my teammates and to ensure that our machines are always in capable hands. I can't wait to spend the rest of this year building awesome machines!"
          />{" "}
          <PersonCard
            bg={Castle}
            name="John R. Castle II"
            position="Robotics Teacher"
            description="Hello! I am one of the science and engineering teachers here at Beverly Hills High School. I have been a teacher at Beverly Hills High since 2017. I completed my education at Portland State University in Portland Oregon. I majored in Organismal Biology (pre-med track) and obtained a Master's of Education with a dual endorsement for Biology and Special Education. I have been teaching since 2009. This year I will be teaching Biology, Introduction to Engineering Design, and Robotics."
          />{" "}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default LeadersPage;
