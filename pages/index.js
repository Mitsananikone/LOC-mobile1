import React from "react";
import HomePage from "@/pages/home/homepage";
import MeetThePerrins from "./meetPerrins/meetPerrins";
import Mission from "./mission/mission";
import Services from "./services/services";
import Location from "./location/location"; // Import the new component
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
    // overflow: "auto", // Enable vertical scrolling
    // overflowX: "hidden", // Disable horizontal scrolling
    zIndex: 1,
  },
  background: {
    height: "auto", // Auto height for mobile
    width: "100%", // Full width on mobile
    margin: "10px 0", // Reduced margin for mobile
    padding: "0px", // Reduced padding for mobile
  },
  section: {
    scrollMarginTop: "10vh", // Add 10vh margin to the top of each section
  },
};

export default function Home() {
  return (
    <>
      <div style={styles.centerContainer}>
        {/* HomePage Section */}
        <div style={styles.background}>
          <section id="home" style={styles.section}>
            <HomePage />
          </section>
        </div>

        {/* MeetThePerrins Section */}
        <div style={styles.background}>
          <section id="meetPerrins" style={styles.section}>
            <MeetThePerrins />
          </section>
        </div>

        {/* Mission Section */}
        <div style={styles.background}>
          <section id="mission" style={styles.section}>
            <Mission />
          </section>
        </div>

        {/* Services Section */}
        <div style={styles.background}>
          <section id="services" style={styles.section}>
            <Services />
          </section>
        </div>

        {/* Location Section */}
        <div style={styles.background}>
          <section id="location" style={styles.section}>
            <Location />
          </section>
        </div>

        {/* About Section */}
        <div style={styles.background}>
          <section id="about" style={styles.section}>
            <About />
          </section>
        </div>

        {/* Contact Section */}
        <div style={styles.background}>
          <section id="contact" style={styles.section}>
            <Contact />
          </section>
        </div>
      </div>

      {/* <ScreenWidthDisplay /> */}
    </>
  );
}