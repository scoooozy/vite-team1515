import React from "react";
import NavPage from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import OutreachCard from "../OutreachCard/OutreachCard";
import albion1 from "./images/albion1.jpg";
import albion2 from "./images/albion2.jpg";
import albion3 from "./images/albion3.jpg";
import bg from "./images/outreachbg.png";
import Header from "../Header/Header";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import "./OutreachPage.css" 
import gate1 from "./images/gatea.jpg"
import walk1 from "./images/woff.png"
import friendship1 from "./images/friendship.jpg"
import gate2 from "./images/gate2.jpg"
import gate3 from "./images/gate3.jpg"
const OutreachPage = () => {
  const events = [
    {
      title: "Albion Street",
      text: "Members of the MorTorq robotics team visited the Albion Street Elementary School in Los Angeles, California, over the holiday season. Members of the team showcased the robot while others handed out presents and played with the children. This annual event is arguably the most anticipated event of the holiday season for MorTorq. The students at the Albion Street school were as excited for the event as MorTorq members.",
      images: [albion1, albion2, albion3],
    },
    {
      title: "Gate SkillsUSA",
      text: "Over the span of 3 months, our high school Robotics members mentored and guided 4 middle-school teams in the SkillsUSA Robotics competition. The teams competed against one another in the field in a competition we hosted in our high school that was open to everyone.",
      images: [gate1, gate2, gate3],
    },
    {
      title: "Walk4Friendship of Los Angeles",
      text: "This year, we raised funds and walked for Friendship Circle, an amazing organization for kids with special needs. We were fortunate to exceed our goal, raising over $900.",
      images: [walk1],
    },
    {
      title: "Friendship Circle of Los Angeles",
      text: "For a day, MorTorq members went to the Friendship Circle, an organization our team holds very dear to our heart, continuing the values of FIRST. We played sports, made crafts, sang songs, and showed that STEM is for EVERYONE.",
      images: [friendship1],
    },
  ];
  const ref = useRef(null);
  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <NavPage />
      <Header wText="OUT" oText="REACH" bg={bg}>
        <p className="header-subtitle fade-in">
          We are a high-school based robotics team that has been providing
          opportunities and education in STEM to our community for years, and
          enabling growth of both our community and students through organizing
          events such as the Women in Stem Speaker Series and Albion Street
          events. We hope to inspire the innovation and spread the skills that
          come with these events in our community and our members, allowing both
          community and team to find great success in life.
        </p>
        <button
          href="#scrollspyHeading1"
          className="btn btn-theme-color modal-toggle"
          onClick={handleScroll}
        >
          <i className="ti-control-play text-danger"></i>
          Learn More
        </button>
      </Header>
      <Container fluid={true} sx={{ flex: "50%" }} className="outreachContainer">
        {events.map((e) => (
          <OutreachCard {...e} ref={ref} />
        ))}
      </Container>

      <Footer />
    </div>
  );
};

export default OutreachPage;
