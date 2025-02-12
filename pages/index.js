import React from "react";
import HomePage from "@/pages/home/homepage";
import MeetThePerrins from "./meetPerrins/meetPerrins";
import Mission from "./mission/mission";
import Plan from "./plan/plan";
import Resources from "./resources/resources";
import About from "./about/about";
import Contact from "./contact/contact";
import ScreenWidthDisplay from "@/components/screenWidthDisplay/ScreenWidthDisplay";

const styles = {
  centerContainer: {
    marginTop: "3vh",
    display: "flex",
    flexDirection: "column", // Stack children vertically
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto", // Allow the container to grow based on content
    overflow: "auto", // Enable vertical scrolling
    overflowX: "hidden", // Disable horizontal scrolling
    zIndex: 1,
  },
  background: {
    height: "auto", // Auto height for mobile
    width: "100%", // Full width on mobile
    margin: "10px 0", // Reduced margin for mobile
    padding: "0px", // Reduced padding for mobile
  },
};

export default function Home() {
  return (
    <>
      <div style={styles.centerContainer}>
        {/* HomePage Section */}
        <div style={styles.background}>
          <section id="home">
            <HomePage />
          </section>
        </div>

        {/* MeetThePerrins Section */}
        <div style={styles.background}>
          <section id="meetPerrins">
            <MeetThePerrins />
          </section>
        </div>

        {/* Uncomment and style other sections as needed */}
       <div style={styles.background}>
          <section id="mission">
            <Mission />
          </section>
        </div>
         {/* <div style={styles.background}>
          <section id="plan">
            <Plan />
          </section>
        </div>
        <div style={styles.background}>
          <section id="resources">
            <Resources />
          </section>
        </div>
        <div style={styles.background}>
          <section id="about">
            <About />
          </section>
        </div>
        <div style={styles.background}>
          <section id="contact">
            <Contact />
          </section>
        </div> */}
      </div>

      {/* <ScreenWidthDisplay /> */}
    </>
  );
}