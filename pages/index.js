import HomePage from "@/pages/home/homepage";
// import LandingPopup from '@/components/landingPopup/landingPopup';
// import ContactForm from '@/components/contactForm/contactForm';

import React from "react";

import MeetThePerrins from "./meetPerrins/meetPerrins";
import Mission from "./mission/mission";
import Plan from "./plan/plan";
import Resources from "./resources/resources";
import About from "./about/about";
import Contact from "./contact/contact";
// import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <div className="centerContainer">
 

        <div className="sections">
          
        <div className="background homepageBackground">
            <section id="home">
              <HomePage />
            </section>
          </div>

          <div className="background">
            <section id="meetPerrins">
              <MeetThePerrins />
            </section>
          </div>

          <div className="background">
            <section id="mission">
              <Mission />
            </section>
          </div>
          <div className="background">
            <section id="plan">
              <Plan />
            </section>
          </div>

          <div className="background">
            <section id="resources">
              <Resources />
            </section>
          </div>

          <div className="background">
            <section id="about">
              <About />
            </section>
          </div>

          <div className="background">
            <section id="contact">
              <Contact />
            </section>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
